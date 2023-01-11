//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
// const {preChargeActivities} = require ("./src/database/preCharge/Activities");
// const {preChargeProducts} = require ("./src/database/preCharge/Products");
// const {preChargeUsers} = require ("./src/database/preCharge/Users");
require("dotenv").config();

// Syncing all the models at once.
conn.sync({ force: false }).then(async () => {
  // await preChargeActivities();
  // await preChargeProducts();
  // await preChargeUsers();
  server.listen(process.env.PORT, () => {
    console.log('%s listening at', process.env.PORT); // eslint-disable-line no-console
  });
});

//README:
// pasos a seguir:
//  arranca ({ force: true })
// primer paso:
//   levantar el server, ({force: true}) crea las tablas en la DB.
// segundo paso:
//   ({force: false})
// tercer paso:
//   descomentar los requires y preCharges.
// cuarto paso:
//   volver a comentar los requires y preCharges. (aca evitamos que se dupliquen)
// quinto paso:
//   tirar y volver a levantar el server y comprobar que los datos sigan cargados y no se hayan duplicado


