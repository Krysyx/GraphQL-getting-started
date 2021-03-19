import { Router } from "express";
import { getAuthors, create } from "../controllers/mongo";
const router = Router();

router.post("/authors", getAuthors);
router.post("/authors/create", create);

export default router;
