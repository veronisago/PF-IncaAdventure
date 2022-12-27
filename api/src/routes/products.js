const { Router } = require("express");
const { Products } = require("../db");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const { name, order, orderBy, min, max, page } = req.query;

    const perPage = 3
    const offset = (page - 1) * perPage

    const conditions = {}
    if (name) (conditions.name = { [Op.like]: `%${name}%` });

    if (min && max) conditions.price = { [Op.between]: [min, max] }
    else if (min) conditions.price = { [Op.gt]: min }
    else if (max) conditions.price = { [Op.lt]: max }

    const products = await Products.findAndCountAll({
      where: { ...conditions },
      order: [
        [orderBy || 'updatedAt', order || 'DESC']
      ],
      limit: perPage,
      offset: offset || 0,
    });
    let totalPages = Math.ceil(products.count / perPage)

    res.status(200).json({ ...products, totalPages, page: page || 1 })
  } catch (error) {
    res.status(500).send(error)
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  if(id){
    try {
      const product = await Products.findByPk(id);
      res.json(product);
    } catch (error) {
      console.log(error);
    }
  }
});

router.post("/", async (req, res) => {
  let { name, price, stock } = req.body;
  try {
    const product = Products.create({name, price, stock});
    res.status(200).json(product);
  } catch (error) {
    res.status(404).send(error.message)
  }
});

router.put("/", async (req, res) => {
  const newData = req.body;
  const id = newData.id
  try {
    const productModified = await Products.update(newData, { where: { id } });
    res.json({ msg: "Product updated" });
  } catch (error) {
    console.log(error);
  };

});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const productToDelete = await Products.findByPk(id);
  if(!productToDelete) {
    res.status(404).json({msg: "That product do not exist brou"});
  } else if(productToDelete.is_active){
    res.status(400).json({msg: "The product must be diactivated before delete"});
  } else {
    try {
      await Products.destroy({where: {id}});
      res.json({msg: "The product has been delete successfully"});
    } catch (error) {
      console.log(error);
    }
  };
});

module.exports = router;
