import { Router } from "express";
import { getAuthors } from "../controllers/mongo";
const router = Router();

router.post("/authors", getAuthors);

export default router;
