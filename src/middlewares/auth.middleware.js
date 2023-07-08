import jwtDecode from "jwt-decode";
import moment from "moment";

export default async (req, res, next) => {
  // Verifico que exista el header de autorizacion
  const auth = req.get("Authorization");

  if (!auth) {
    // El header no existe, se rechaza la peticion
    return res.status(401).json({
      status: 401,
      message: "Necesitas loguearte para ver este recurso",
    });
  }

  const words = auth.split(" ");
  // Verifico que sea de tipo Bearer
  if (words[0] != "Bearer") {
    // No es Bearer token, se rechaza
    return res.status(400).json({
      status: 400,
      message: "El método de autenticación es via Bearer Token",
    });
  }

  // Valido el JWT con la API provista por el profesor
  const auth_res = await fetch(
    "https://api.sebastian.cl/UtemAuth/v1/tokens/validate",
    {
      headers: {
        "X-API-TOKEN": "GRUPO-K-CPYD",
        "X-API-KEY": "168f61c8e912458daec8733f466ccd20",
        "Content-type": "application/json",
        accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        jwt: words[1],
        created: moment.utc().format(),
      }),
    }
  ).then((res) => res.json());

  // La API indica que no es valido el token, se rechaza
  if (!auth_res.ok) {
    return res.status(401).json({
      status: 401,
      message: "El Token de autorizacion no pudo ser validado.",
    });
  }

  // Se agregan los datos del JWT a la peticion
  req.user_data = jwtDecode(words[1]);

  // Se termina de validar.
  next();
};
