require('dotenv').config();
const { Router } = require('express');
const router = Router();

//Importo todos los routers;
const activities = require("./activities");
const products = require("./products");
const users = require("./users");
const reviews = require("./reviews");
const stores = require("./stores");
const images = require("./images");
const cloud = require("./cloud");
const profile = require("./profile");




//Configuro todos los routers
router.use("/activities", activities);
router.use("/products", products);
router.use("/users", users);
router.use("/reviews", reviews);
router.use("/stores", stores);
router.use("/images", images);
router.use("/cloud", cloud);
router.use("/profile", profile);





module.exports = router;