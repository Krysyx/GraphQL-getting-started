import { Router } from "express";
import { messages } from "../controllers/messages";
import { dices } from "../controllers/dices";
import { mutation } from "../controllers/mutations";
import { types } from "../controllers/types";

const router = Router();

router.post("/dices", dices);
router.post("/messages", messages);
router.post("/mutation", mutation);
router.post("/contructingTypes", types);

export default router;
