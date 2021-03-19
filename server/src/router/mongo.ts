import { Router } from "express";
import { getAuthors } from "../controllers/mongo";
const router = Router();

router.get("/authors", getAuthors);

export default router;
