const { Router } = require("express");
const { User, Activity, Product, Review} = require("../db");
// const { requiresAuth } = require('express-openid-connect');
const router = Router();

// router.get('/', requiresAuth(), (req, res) => {
//   res.send(JSON.stringify(req.oidc.user));
// });

//ruta para cuando el usuario realiza compra de actividad

// const asociar = () => {
//   const { idUser, idActivity } = req.query;
  
//   const activity = await Activity.findOne({ where: { id: idActivity } });
//   const user = await User.findOne({ where: { id: idUser } })
  
//   await user.addActivity(activity);
  
//   const respuesta = await user.getActivities();
  
//   return res.status(200).json(respuesta);

// }

router.get("/services", async (req, res) => {
  try {
    const { idUser } = req.query;

    const user = await User.findOne({ where: { id: idUser } })

    const userActivities = await user.getActivities({
      include: [{
        model: Review,
        as: 'activity_rating',
        attributes: ["rating"]
      }]
    });

    const userProducts = await user.getProducts({
      include: [{
        model: Review,
        attributes: ["rating"]
      }]
    });

    res.json({userActivities, userProducts})
  } catch (error) {
    console.log(error)
    res.status(404).json(error);
  }
});

//ruta para cuando se hizo efectiva la compra de un producto
// router.get("/products", async (req, res) => {
//   try {
    
//     const { idUser, idProduct } = req.query;
    
//     const product = await Product.findOne({ where: { id: idProduct } });
//     const user = await User.findOne({ where: { id: idUser } })
    
//     await user.addProduct(product);
    
//     const respuesta = await user.getProducts();

//     return res.status(200).json(respuesta);
    
//   } catch (error) {
//     console.log(error)
//     res.status(404).json(error);
//   }
// });



router.get("/:username", async (req, res) => {
  const { username } = req.params;
  const users = await User.findAll();
  console.log(users);
  const userProfile = await users.filter(u => u.username === username);
  console.log(userProfile);

  username ? res.json(userProfile) : res.status(404).json({ msg: "User not found!" });
});

module.exports = router;