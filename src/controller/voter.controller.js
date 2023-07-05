import moment from "moment/moment";
import db from "../database";
import { v4 as uuidv4 } from "uuid";

export const votar = async (req, res) => {
  const { sectionToken, attendance, choice } = req.body;
  const { user_data } = req;

  console.log(user_data);

  if (!sectionToken || !attendance || !choice) {
    return res.status(400).json({
      status: 400,
      message: "Fallo en la peticion",
    });
  }
  const user = await db.query("SELECT id_usuario FROM usuario LIMIT 1");
  await db.query(
    `
    select usuario.*, ramos.* 
    from usuario 
    join pivote on usuario.id_usuario = pivote.id_usuario 
    join ramos on pivote.id_ramo = pivote.id_ramo
    where ramos.activo and ramos.id_ramo = $1
    group by usuario.id_usuario, ramos.id_ramo;
    `,
    [sectionToken]
  );

  const id_voto = uuidv4();
  const timestamp = moment.utc().format();
  try {
    await db.query(
      `
        INSERT INTO public.votos
        (id_votacion, id_usuario, id_ramo, voto, fecha)
        VALUES($1, $2, $3, $4 , $5);
    `,
      [id_voto, user.rows[0].id_usuario, sectionToken, choice, timestamp]
    );
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "No se pudo ingresa su voto",
    });
  }

  res.status(200).json({
    ok: true,
    message: "Voto procesado correctamente",
    created: timestamp,
  });
};

export const getCourses = async (req, res) => {
  const user = await db.query("SELECT id_usuario FROM usuario LIMIT 1");

  ("select usuario.*, ramos.* from usuario join pivote on usuario.id_usuario = pivote.id_usuario join ramos on pivote.id_ramo = pivote.id_ramo group by usuario.id_usuario, ramos.id_ramo");
  res.json("Ver todos los cursos");
};

export const getResults = (req, res) => {
  res.json("Ver votacion de todas las secciones");
};

export const getResultsById = (req, res) => {
  res.json("Ver votacion de una seccion por token");
};
