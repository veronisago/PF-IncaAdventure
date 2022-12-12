// const { Router } = require("express");
// const { Users, Stores } = require("../db");
// const router = Router();



// router.get("/", async (req, res) => {
//   const name = req.query.name;
//   const order = req.query.order;
//   const users = await Users.findAll();

//   if(name){
//     try {
//       const user = await users.filter(a => a.name.toLowerCase().includes(name.toLowerCase()));
//       res.json(user);
//     } catch (error) {
//       console.log(error);
//     }
//   } else if (order){
//     if (order === "ASC"){
//       try {
//         const usersAsc = await users.sort((a, b) => {
//           if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
//           if(b.name.toLowerCase() > a.name.toLowerCase()) return -1;
//           return 0;
//         });
//         res.json(usersAsc);
//       } catch (error) {
//         console.log(error)
//       }
//     } else if (order === "DESC"){
//       try {
//         const usersDesc = await users.sort((a, b) => {
//           if(a.name.toLowerCase() > b.name.toLowerCase()) return -1;
//           if(b.name.toLowerCase() > a.name.toLowerCase()) return 1;
//           return 0
//         });
//         res.json(usersDesc);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   } else {
//     res.json(users);
//   }

// });

// router.get("/:id", async (req, res) => {
//   const id = req.params.id;
//   const users = await Users.findAll();
  
//   if (id) {
//     try {
//       const user = users.filter(u => Number(u.id) === Number(id));
//       if(!user.length) res.status(400).json({msg: "no existe usuario con ese id"});
//       res.json(user);
//     } catch (error) {
//       console.log(error);
//     }
//   }
// });



// router.post("/", async (req, res) => {
//   const {last_name, first_name, birth_date, nationality, email, id_type, id_number} = req.body;
  
  
//   try {
//     const user = await Users.findOrCreate({where: {last_name, first_name, birth_date, nationality, email, id_type, id_number}});
//     if(user[1]){
//       try {
//         const store = await Stores.findOrCreate({where: {
//           name: email,
//         }});
//         console.log(`la store de ${email} fue creada correctamente`);
//       } catch (error) {
//         console.log(error);
//       }
//     }

//     res.json(user);
//   } catch (error) {
//     console.log(error);
//   }
// });

// router.put("/:id", async (req, res) => {
//   const id = req.params.id; // en un principio lo hacemos solo con id
//   const newData = req.body;
//   // si viene desability

//   if(newData.disable) newData.is_active = false;
//   try {
//     const userModified = await Users.update(newData, {where: {id}});
//     console.log(userModified);
//     res.json({msg: "User updated"});
//   } catch (error) {
//     console.log(error);
//   };


// });

// router.delete("/:id", async (req, res) => {
//   const id = req.params.id;
//   const userToDelete = await Users.findByPk(id);
//   if(!userToDelete) {
//     res.status(404).json({msg: "That user do not exist brou"});
//   } else if(userToDelete.is_active){
//     res.status(400).json({msg: "The user must be diactivated before delete"});
//   } else {
//     try {
//       await Users.destroy({where: {id}});
//       res.json({msg: "The user has been delete successfully"});
//     } catch (error) {
//       console.log(error);
//     }
//   };
// });


// module.exports = router;
