const { activities } = require("../models/Activities");
const { Activities } = require("../../db");


// detallar como f¡
const preChargeActivities = () => {
    const createAtivities = activities.map((a) => {
      const obj = {
       name: a.name,
       schedule: a.schedule,
       price: a.price,
       start_at: a.start_at,
       end_at: a.end_at,
       description: a.description,
       allowed_age: a.allowed_age,
       difficulty_level: a.difficulty_level
     };
    return obj
  });
  Activities.bulkCreate(createAtivities);
};

module.exports = {preChargeActivities};