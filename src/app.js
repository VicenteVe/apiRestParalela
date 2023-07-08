import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
import voteRoutes from "./routes/voter.routes";
import authRoutes from "./routes/auth.routes";
import authMiddleware from "./middlewares/auth.middleware";

const app = express();
app.use(morgan("dev"));
app.set("pkg", pkg);
app.use(express.json());

app.get("https://cpyd.sebastian.cl/grupok/" , (_,res) => {
    res.redirect("https://cpyd.sebastian.cl/grupok/v1/auth")
})

app.get("/authors", (_, res) => {
    res.json({
        author: app.get("pkg").author,
        name: app.get("pkg").name,
        description: app.get("pkg").description,
    });
});

app.use("https://cpyd.sebastian.cl/grupok/v1/voter", authMiddleware, voteRoutes);
app.use("https://cpyd.sebastian.cl/grupok/v1/auth", authRoutes);

export default app;
