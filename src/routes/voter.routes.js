import { Router } from "express";
const router = Router();
import * as voteController from "../controller/voter.controller";

router.post("/vote", voteController.votar);
router.get("/:id/results", voteController.getResultsById);
router.get("/results", voteController.getResults);
router.get("/courses", voteController.getCourses);

export default router;
