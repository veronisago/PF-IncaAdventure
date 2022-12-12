const { Router } = require("express");
const router = Router();
const { Reviews } = require("../db");

router.get("/", async (req, res) => {
  const rating = req.query.rating;
  const word = req.query.word;
  const reviews = await Reviews.findAll();
  
  if(rating){
    try {
      const reviewsByRating = await reviews.filter(r => Number(rating) === Number(r.rating));
      res.json(reviewsByRating);
    } catch (error) {
      console.log(error);
    }
  } else if(word){
    try {
      const reviewsByWord = await reviews.filter(r => r.comments.toLowerCase().includes(word.toLowerCase()));
      res.json(reviewsByWord);
    } catch (error) {
      console.log(error)
    }
  } else {
    res.json(reviews);
  };

});


router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const reviews = await Reviews.findAll();
  
  if (id) {
    try {
      const review = reviews.filter(u => Number(u.id) === Number(id));
      if(!review.length) res.status(400).json({msg: "no existe usuario con ese id"});
      res.json(review);
    } catch (error) {
      console.log(error);
    }
  }
});


router.post("/", async (req, res) => {
  const {rating, comments} = req.body;
  // ver como traer activityId, userId, 
  if(!rating || !comments) res.status(400).json({msg: "Missing info bro"});

  try {
    const review = Reviews.findOrCreate({
      // la idea es que activityId y userId no vuelvan a aparecer juntos
      where: {
        rating,
        comments
      }
    })
    res.json(review);
  } catch (error) {
    console.log(error);
  }
  
});

router.put("/:id", async (req, res) => {
  const id = req.params.id; // en un principio lo hacemos solo con id
  const newData = req.body;
  // si viene desability

  if(newData.disable) newData.is_active = false;
  try {
    const reviewsModified = await Reviews.update(newData, {where: {id}});
    console.log(reviewsModified);
    res.json({msg: "Review updated"});
  } catch (error) {
    console.log(error);
  };


});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const reviewToDelete = await Reviews.findByPk(id);
  if(!reviewToDelete) {
    res.status(404).json({msg: "That review do not exist brou"});
  } else if(reviewToDelete.is_active){
    res.status(400).json({msg: "The review must be diactivated before delete"});
  } else {
    try {
      await Reviews.destroy({where: {id}});
      res.json({msg: "The review has been delete successfully"});
    } catch (error) {
      console.log(error);
    }
  };
});



module.exports = router;
