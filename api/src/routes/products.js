const { Router } = require("express");
const { Products } = require("../db");
const router = Router();

router.get("/", async (req, res) => {
  const { name, order } = req.query;
  const { min, max } = req.body;
  const products = await Products.findAll();

  if(min && max){
    if(typeof Number(min) !== "number" || typeof Number(max) !== "number") res.status(400).json({msg: "Both numbers must be integer"});
    else {
      let productsByPriceRange = await products.filter(p => p.price > min && p.price < max);
      res.json(productsByPriceRange);
    }
  }
  if(name){
    try {
      const productName = products.filter((d) =>
        d.name.toLowerCase().includes(name.toLowerCase())
      );
      res.json(productName);
    } catch (error) {
      console.log(error);
    }
  } else if(order){
    if (order === "A-Z") {
      try {
        const productsAsc = await products.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          if (b.name.toLowerCase() > a.name.toLowerCase()) return -1;
          return 0;
        });
        res.json(productsAsc);
      } catch (error) {
        console.log(error);
      }
    } else if (order === "Z-A") {
      try {
        const productsDesc = await products.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
          if (b.name.toLowerCase() > a.name.toLowerCase()) return 1;
          return 0;
        });
        res.json(productsDesc);
      } catch (error) {
        console.log(error);
      }
    }
  } else if(order === "CHEAP"){
    try {
      const productsCheap = await products.sort((a, b) => {
        if(a.price > b.price) return 1;
        if(b.price > a.price) return -1;
        return 0;
      });
      res.json(productsCheap);
    } catch (error) {
      console.log(error);
    }
  } else if(order === "EXPENSIVE"){
    try {
      const productsExpensive = await products.sort((a, b) => {
        if(a.price > b.price) return -1;
        if(b.price > a.price) return 1;
        return 0;
      });
      res.json(productsExpensive);
    } catch (error) {
      console.log(error);
    }
  } else {
    res.json(products);
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
    const product = Products.findOrCreate({
       where: {
        name, 
        price, 
        stock
      } 
    });
    res.json(product);
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
    const productModified = await Products.update(newData, {where: {id}});
    console.log(productModified);
    res.json({msg: "Product updated"});
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
