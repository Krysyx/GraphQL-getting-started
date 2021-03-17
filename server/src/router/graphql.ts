import { Router } from "express";
import { messages } from "../controllers/messages";
import { dices } from "../controllers/dices";
import { mutation } from "../controllers/mutations";

const router = Router();

router.post("/dices", dices);
router.post("/messages", messages);
router.post("/mutation", mutation);

export default router;
