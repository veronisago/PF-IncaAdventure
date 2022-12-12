const { Router } = require("express");
const router = Router();
const { Users, Stores } = require("../db");
const nodemailer = require("nodemailer");

router.get("/", async (req, res) => {
  const { username, order, email } = req.query;
  const users = await Users.findAll();

  if (username) {
    try {
      const user = await users.filter(a => a.username.toLowerCase().includes(username.toLowerCase()));
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  } else if (order) {
    if (order === "A-Z") {
      try {
        const usersAsc = await users.sort((a, b) => {
          if (a.username.toLowerCase() > b.username.toLowerCase()) return 1;
          if (b.username.toLowerCase() > a.username.toLowerCase()) return -1;
          return 0;
        });
        res.json(usersAsc);
      } catch (error) {
        console.log(error)
      }
    } else if (order === "Z-A") {
      try {
        const usersDesc = await users.sort((a, b) => {
          if (a.username.toLowerCase() > b.username.toLowerCase()) return -1;
          if (b.username.toLowerCase() > a.username.toLowerCase()) return 1;
          return 0
        });
        res.json(usersDesc);
      } catch (error) {
        console.log(error);
      }
    }
  }
  else if (email) {
    const userEmail = await Users.findOne({
      where: {
        email: email
      }
    })
    res.status(200).json(userEmail)
  }
  else {
    res.json(users);
  }

});

// router.get("/:id/:email", async (req, res) => {
//   // id x params
//   const {id, email} = req.params;
//   const users = await Users.findAll();

//   if (id) {
//     try {
//       const user = users.filter(u => Number(u.id) === Number(id));
//       if(!user.length) res.status(400).json({msg: "no existe usuario con ese id"});
//       res.json(user);
//     } catch (error) {
//       console.log(error);
//     }
//   } else if(email){
//     try {
//       const user = users.filter(u => u.email === email);
//       if(!user.length) res.status(400).json({msg: "no existe usuario con ese email"});
//       res.json(user);
//     } catch (error) {
//       console.log(error);

//     }
//   }
// });

router.post("/", async (req, res) => {
  const { last_name, first_name, username, password, birth_date, nationality, email, id_number } = req.body;

  try {
    const user = await Users.findOrCreate({ where: { last_name, first_name, username, password, birth_date, nationality, email, id_number } });
    console.log(user)
    if (user[1]) {
      try {
        const store = await Stores.findOrCreate({
          where: {
            name: username,
          }
        });
        console.log(`la store de ${username} fue creada correctamente`);

        const transporter = nodemailer.createTransport({
          host: 'smtp.ethereal.email',
          port: 587,
          auth: {
            user: 'eleanore.schiller92@ethereal.email',
            pass: 'mjRNSb2BKtVxhkmMcy'
          }
        });
        var mailOptions = {
          from: "IncaAdventure",
          to: `${email}`,
          subject: "Bienvenida",
          text: "Bienvenido a una nueva experiencia"
        }

        let info = await transporter.sendMail(mailOptions,);
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        console.log("Email sent!");

      } catch (error) {
        console.log(error);
      }
    }

    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id; // en un principio lo hacemos solo con id
  const newData = req.body;
  // si viene desability

  if (newData.disable) newData.is_active = false;
  try {
    const userModified = await Users.update(newData, { where: { id } });
    console.log(userModified);
    res.json({ msg: "User updated" });
  } catch (error) {
    console.log(error);
  };


});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const userToDelete = await Users.findByPk(id);
  if (!userToDelete) {
    res.status(404).json({ msg: "That user do not exist brou" });
  } else if (userToDelete.is_active) {
    res.status(400).json({ msg: "The user must be diactivated before delete" });
  } else {
    try {
      await Users.destroy({ where: { id } });
      res.json({ msg: "The user has been delete successfully" });
    } catch (error) {
      console.log(error);
    }
  };
});

// router.get("/login");

// router.get("/logout");

// router.get("/profile");

module.exports = router;
