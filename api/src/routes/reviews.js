const { Router } = require("express");
const router = Router();
const { Review, User, Activity, Product } = require("../db");
const sequelize = require('sequelize');

router.get("/", async (req, res) => {
  try {
    const activity = await Activity.findAll({
      include: [{
        model: Review,
        as: 'activity_rating',
        attributes: []
      }],
      attributes: {
        include: [
          [sequelize.fn('AVG', sequelize.col('activity_rating.rating')), 'avgRating']
        ]
      },
      group: ['Activity.id'],
      order: [[sequelize.fn('AVG', sequelize.col('activity_rating.rating')), "DESC"]],
    })

    res.json(activity)
  } catch (error) {
    console.log(error)
  }

});

router.post("/activity", async (req, res) => {

  const { userId, id, rating, comments } = req.body

  try {
    const review = await Review.findOrCreate({
      where: {
        UserId: userId,
        ActivityId: id
      },
      defaults:{
        rating,
        comments
      }
    });

    // const activity = await Activity.findOne({ where: { id: id} });
    // const user = await User.findOne({ where: { id: userId } })

    // await activity.addActivity_rating(review)
    // await user.addReview(review)

    res.status(200).json(review)
  } catch (error) {
    console.log(error)
    res.status(404).json(error)
  }
})

router.post("/product", async (req, res) => {

  const { userId, id, rating, comments } = req.body

  try {
    const review = await Review.findOrCreate({
      where: {
        UserId: userId,
        ProductId: id
      },
      defaults:{
        rating,
        comments
      } 
    });

    // const product = await Product.findOne({ where: { id: id } });
    // const user = await User.findOne({ where: { id: userId } })

    // await product.addReview(review)
    // await user.addReview(review)
    console.log('entramos a product');

    res.status(200).json(review)
  } catch (error) {
    console.log(error)
    res.status(404).json(error)
  }
})



module.exports = router;
