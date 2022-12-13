const { Router } = require("express");
const { Activities } = require("../db");
const router = Router();

router.get("/", async (req, res) => {
  // puede recibir query
  const { name, order } = req.query;
  const { min, max } = req.body;
  const activities = await Activities.findAll();
  if (min && max) {
    if (typeof Number(min) !== "number" || typeof Number(max) !== "number") res.status(400).json({ msg: "Both numbers must be integer" });
    else {
      let activitiesByPriceRange = await activities.filter(p => p.price > min && p.price < max);
      res.json(activitiesByPriceRange);
    }
  }
  if (name) {
    try {
      const activity = await activities.filter((a) =>
        a.name.toLowerCase().includes(name.toLowerCase())
      );
      res.json(activity);
    } catch (error) {
      console.log(error);
    }
  } else if (order) {
    if (order === "A-Z") {
      try {
        const activitiesAsc = await activities.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          if (b.name.toLowerCase() > a.name.toLowerCase()) return -1;
          return 0;
        });
        res.json(activitiesAsc);
      } catch (error) {
        console.log(error);
      }
    } else if (order === "Z-A") {
      try {
        const activitiesDesc = await activities.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
          if (b.name.toLowerCase() > a.name.toLowerCase()) return 1;
          return 0;
        });
        res.json(activitiesDesc);
      } catch (error) {
        console.log(error);
      }
    }
  } else if (order === "CHEAP") {
    try {
      const activitiesCheap = await activities.sort((a, b) => {
        if (a.price > b.price) return 1;
        if (b.price > a.price) return -1;
        return 0;
      });
      res.json(activitiesCheap);
    } catch (error) {
      console.log(error);
    }
  } else if (order === "EXPENSIVE") {
    try {
      const activitiesExpensive = await activities.sort((a, b) => {
        if (a.price > b.price) return -1;
        if (b.price > a.price) return 1;
        return 0;
      });
      res.json(activitiesExpensive);
    } catch (error) {
      console.log(error);
    }
  } else {
    res.json(activities);
  }

});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  if (id) {
    try {
      const activity = await Activities.findByPk(id);
      res.json(activity);
    } catch (error) {
      console.log(error);
    }
  }
});

router.post("/", async (req, res) => {
  const { name, schedule, price, start_at, end_at, description, allowed_age, difficulty_level } = req.body;

  try {
    const activity = await Activities.Create({ name, schedule, start_at, end_at, price, description, allowed_age, difficulty_level });
    res.status(200).json(activity);
    
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id; // en un principio lo hacemos solo con id
  const newData = req.body;
  // si viene desability

  if (newData.disable) newData.is_active = false;
  try {
    const activityModified = await Activities.update(newData, { where: { id } });
    console.log(activityModified);
    res.json({ msg: "Activity updated" });
  } catch (error) {
    console.log(error);
  };


});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const activityToDelete = await Activities.findByPk(id);
  if (!activityToDelete) {
    res.status(404).json({ msg: "That activity do not exist brou" });
  } else if (activityToDelete.is_active) {
    res.status(400).json({ msg: "The activity must be diactivated before delete" });
  } else {
    try {
      await Activities.destroy({ where: { id } });
      res.json({ msg: "The activity has been delete successfully" });
    } catch (error) {
      console.log(error);
    }
  };
});

module.exports = router;
