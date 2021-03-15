import { Router } from "express";
import { rollDice } from "../controllers/graphql";

const router = Router();

router.post("/", rollDice);

export default router;
