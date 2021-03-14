import { Router } from "express";
const router = Router();

router.get("/", (req, res, next) => {
  console.log("REQUEST HANDLED");
});

export default router;
