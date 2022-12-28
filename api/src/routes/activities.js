const { Router } = require("express");
const { Op } = require("sequelize");
const { Activities } = require("../db");
const router = Router();
const { generatePDF } = require("../emails/email");

router.get("/", async (req, res) => {
  try {
    const { name, order, orderBy, min, max, page } = req.query;

    const tickets = [
      {
        id: 1,
        title: "compra",
        request: "canjear",
        status: "activo"
      }
    ];

    generatePDF(tickets, "acostavalentina7@gmail.com", "lau0310");

    const perPage = 6
    const offset = (page - 1) * perPage

    const conditions = {}
    if (name) (conditions.name = { [Op.like]: `%${name}%` });

    if (min && max) conditions.price = { [Op.between]: [min, max] }
    else if (min) conditions.price = { [Op.gt]: min }
    else if (max) conditions.price = { [Op.lt]: max }

    const activities = await Activities.findAndCountAll({
      where: { ...conditions },
      order: [
        [orderBy || 'updatedAt', order || 'DESC']
      ],
      limit: perPage,
      offset: offset || 0,
    });
    let totalPages = Math.ceil(activities.count / perPage)

    res.status(200).json({ ...activities, totalPages, page: page || 1 })
  } catch (error) {
    res.status(500).send(error)
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
    const activity = await Activities.create({ name, schedule, start_at, end_at, price, description, allowed_age, difficulty_level });
    res.status(200).json(activity);

  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.put("/", async (req, res) => {
  const newData = req.body;
  const id = newData.id
  try {
    const activityModified = await Activities.update(newData, { where: { id } });
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
