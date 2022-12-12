const { products } = require("../models/Products");
const { Products } = require("../../db");


// detallar como f¡
const preChargeProducts = () => {
    const createProducts = products.map((p) => {
      const obj = {
        name: p.name,
        price: p.price,
        stock: p.stock
     };
    return obj
  });
  Products.bulkCreate(createProducts);
};

module.exports = {preChargeProducts};