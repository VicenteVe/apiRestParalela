import { Client } from "pg";

const client = new Client({
    user: 'grupok',
    host: '143.198.53.32',
    database: 'grupokdb',
    password: 'fmg,Tc6.gf',
    port: 6432,
  })

export default client; 


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