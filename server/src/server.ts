import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import corsOptions from "./configs/cors";
import { graphqlRouter } from "./router";
import Message from "./classes/Message";
dotenv.config({ path: `${process.env.NODE_ENV}.env` });

const server = express();
const PORT = process.env.PORT || 7201;

server.use(cors(corsOptions));
server.use(express.json());
server.use("/graphql", graphqlRouter);

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
