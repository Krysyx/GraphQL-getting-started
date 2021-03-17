import { Router } from "express";
import { messages } from "../controllers/messages";
import { dices } from "../controllers/dices";

const router = Router();

router.post("/dices", dices);
router.post("/messages", messages);

export default router;
