import { Router } from "express";
import { authorQuery, authorMutation } from "../controllers/author";
// import { bookQuery, bookMutation } from "../controllers/books";
import book from "../controllers/books";
const router = Router();

router.post("/authors/query", authorQuery);
router.post("/authors/mutation", authorMutation);
router.post("/books/query", book);
router.post("/books/mutation", book);

export default router;
