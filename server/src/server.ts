import dotenv from "dotenv";
import express from "express";
import { authRouter } from "./router";

dotenv.config({ path: `${process.env.NODE_ENV}.env` });
const server = express();
const PORT = process.env.PORT || 7201;

server.use(express.json());
server.use("/", authRouter);

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
