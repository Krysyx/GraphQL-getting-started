import express from "express";
import authRouter from "./router/auth";
const server = express();

server.use(express.json());
server.use("/", authRouter);
