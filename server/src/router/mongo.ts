import { Router } from "express";
import { getAuthors, create, update } from "../controllers/mongo";
const router = Router();

router.post("/authors", getAuthors);
router.post("/authors/create", create);
router.post("/authors/update", update);

export default router;
