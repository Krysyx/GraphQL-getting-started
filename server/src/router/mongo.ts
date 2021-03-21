import { Router } from "express";
import authorController from "../controllers/author";
import bookController from "../controllers/books";
const router = Router();

router.post("/authors", authorController);
router.post("/books", bookController);

export default router;
