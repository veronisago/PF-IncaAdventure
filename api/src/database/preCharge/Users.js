const { users } = require("../models/Users");
const { Users } = require("../../db");


// detallar como f¡
const preChargeUsers = () => {
    const createUsers = users.map((u) => {
      const obj = {
        last_name: u.last_name,
        first_name: u.first_name,
        username: u.username,
        password: u.password,
        birth_date: u.birth_date,
        nationality: u.nationality,
        email: u.email,
        id_type: u.id_type,
        id_number: u.id_number,
        is_admin: u.is_admin
     };
    return obj
  });
  Users.bulkCreate(createUsers);
};

module.exports = {preChargeUsers};