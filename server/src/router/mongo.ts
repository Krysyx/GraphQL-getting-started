import { Router } from "express";
import { authorQuery, authorMutation } from "../controllers/author";
import { bookQuery } from "../controllers/books";
const router = Router();

router.post("/authors/query", authorQuery);
router.post("/authors/mutation", authorMutation);
router.post("/books/query", bookQuery);

export default router;
