const { Router } = require("express");
const { Users } = require("../db");
// const { requiresAuth } = require('express-openid-connect');
const router = Router();

// router.get('/', requiresAuth(), (req, res) => {
//   res.send(JSON.stringify(req.oidc.user));
// });

router.get("/:username", async (req, res) => {
  const {username} = req.params;
  const users = await Users.findAll();
  console.log(users);
  const userProfile = await users.filter(u => u.username === username);
  console.log(userProfile);

  username ? res.json(userProfile) : res.status(404).json({msg: "User not found!"});
});


module.exports = router;