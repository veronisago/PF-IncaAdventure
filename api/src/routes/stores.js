const { Router } = require("express");
const router = Router();
const { Stores } = require("../db");

// la store se crea junto con el usuario

router.get("/", async (req, res) => {
  const name = req.query.name;
  const order = req.query.order;
  const stores = await Stores.findAll();

  if(name){
    try {
      const store = await stores.filter(s => s.name.toLowerCase().includes(name.toLowerCase()));
      res.json(store);
    } catch (error) {
      console.log(error);
    }
  } else if (order){
    if (order === "A-Z"){
      try {
        const storesAsc = await stores.sort((a, b) => {
          if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          if(b.name.toLowerCase() > a.name.toLowerCase()) return -1;
          return 0;
        });
        res.json(storesAsc);
      } catch (error) {
        console.log(error)
      }
    } else if (order === "Z-A"){
      try {
        const storesDesc = await stores.sort((a, b) => {
          if(a.name.toLowerCase() > b.name.toLowerCase()) return -1;
          if(b.name.toLowerCase() > a.name.toLowerCase()) return 1;
          return 0
        });
        res.json(storesDesc);
      } catch (error) {
        console.log(error);
      }
    }
  } else {
    res.json(stores);
  }

  
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  if(id){
    try {
      const store = await Stores.findByPk(id);
      res.json(store);
    } catch (error) {
      console.log(error);
    }
  }

});

router.put("/:id", async (req, res) => {
  const id = req.params.id; // en un principio lo hacemos solo con id
  const newData = req.body;
  // si viene desability

  if(newData.disable) newData.is_active = false;
  try {
    const storeModified = await Stores.update(newData, {where: {id}});
    console.log(storeModified);
    res.json({msg: "Store updated"});
  } catch (error) {
    console.log(error);
  };


});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const storeToDelete = await Stores.findByPk(id);
  if(!storeToDelete) {
    res.status(404).json({msg: "That store do not exist brou"});
  } else if(storeToDelete.is_active){
    res.status(400).json({msg: "The store must be diactivated before delete"});
  } else {
    try {
      await Stores.destroy({where: {id}});
      res.json({msg: "The store has been delete successfully"});
    } catch (error) {
      console.log(error);
    }
  };
});

module.exports = router;
