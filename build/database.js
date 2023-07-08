"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _pg = require("pg");
/*const client = new Client({
    user: 'grupok',
    host: '143.198.53.32',
    database: 'grupokdb',
    password: 'fmg,Tc6.gf',
    port: 6432,
  })*/

var client = new _pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'Paralela',
  password: 'supervice2',
  port: 5432
});
var _default = client;
/* const conexion = async () =>{
  await client.connect();
   
  const res = await client.query("select * from usuarios");
  const result = res.rows;

  await client.end();

  return result;
}

app.get('/database', (req, res) => {
    conexion().then(respuesta => {
        console.log(respuesta)})
    })
    */
exports["default"] = _default;