import { Router } from "express";
import { query, mutation } from "../controllers/mongo";
const router = Router();

router.post("/authors/query", query);
router.post("/authors/mutation", mutation);

export default router;
