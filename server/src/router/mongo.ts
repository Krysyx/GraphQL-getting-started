import { Router } from "express";
import { query, mutation } from "../controllers/author";
const router = Router();

router.post("/authors/query", query);
router.post("/authors/mutation", mutation);
router.post("/books/query");

export default router;
