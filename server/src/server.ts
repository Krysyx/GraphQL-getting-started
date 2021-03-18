import dotenv from "dotenv";
dotenv.config({ path: `${process.env.NODE_ENV}.env` });
import express from "express";
import cors from "cors";
import corsOptions from "./configs/cors";
import { graphqlRouter } from "./router";
import connection from "./configs/database";

const server = express();
const PORT = process.env.PORT || 7201;

server.use(cors(corsOptions));
server.use(express.json());
server.use("/graphql", graphqlRouter);

connection.on("connected", () => console.log("Successfully connected to Mongo Database"));
connection.on("error", (error) => console.error("Cannot connect to database : ", error));
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
