const { Router } = require("express");
const router = Router();
const { Op } = require("sequelize");
const { User, Store } = require("../db");
const nodemailer = require("nodemailer");

router.get("/", async (req, res) => {

  try {
    const { username, order, orderBy, email, id, page } = req.query;
    const perPage = 6
    const offset = (page - 1) * perPage

    const conditions = {}
    if (username) (conditions.username = { [Op.like]: `${username}%` });
    if (email) (conditions.email = { [Op.like]: `${email}%` });
    if (id) (conditions.id = { [Op.eq]: id });

    const users = await User.findAndCountAll({
      where: { ...conditions },
      order: [
        [orderBy || 'updatedAt', order || 'DESC']
      ],
      limit: perPage,
      offset: offset || 0,
    });
    let totalPages = Math.ceil(users.count / perPage)

    res.status(200).json({ ...users, totalPages, page: page || 1 })
  } catch (error) {
    res.status(404).send(error.message);
  }

});


router.post("/", async (req, res) => {
  const { last_name, first_name, username, password, birth_date, nationality, email, id_number } = req.body;

  try {
    const user = await User.findOrCreate({ where: { last_name, first_name, username, password, birth_date, nationality, email, id_number } });
    console.log(user)

        // const transporter = nodemailer.createTransport({
        //   host: 'smtp.ethereal.email',
        //   port: 587,
        //   auth: {
        //     user: 'eleanore.schiller92@ethereal.email',
        //     pass: 'mjRNSb2BKtVxhkmMcy'
        //   }
        // });
        // var mailOptions = {
        //   from: "IncaAdventure",
        //   to: `${email}`,
        //   subject: "Bienvenida",
        //   text: "Bienvenido a una nueva experiencia"
        // }

        // let info = await transporter.sendMail(mailOptions,);
        // console.log("Message sent: %s", info.messageId);
        // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // console.log("Email sent!");

      return res.status(200).json(user);

  } catch (error) {
    console.log(error);
    res.status(404).json(error)
  }
});

router.put("/", async (req, res) => {
  const newData = req.body;
  const id = newData.id
  try {
    const userModified = await User.update(newData, { where: { id } });
    res.json({ msg: "User updated" });
  } catch (error) {
    console.log(error);
  };

});


module.exports = router;
