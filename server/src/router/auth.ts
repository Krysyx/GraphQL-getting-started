import { Router } from "express";
const router = Router();

router.get("/", (req: any, res: any, next: any) => {
  console.log("REQUEST HANDLED");
});

export default router;
