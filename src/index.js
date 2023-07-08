import app from "./app";
import db from "./database";

const main = async () => {
  await db.connect();
  app.listen(8890);
  console.log("Server on port", 8890);
};
main();
