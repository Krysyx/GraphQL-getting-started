import dotenv from "dotenv";
dotenv.config({ path: `${process.env.NODE_ENV}.env` });

export default {
  origin: process.env.CLIENT_URL,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true,
  optionsSuccessStatus: 200,
  allowedHeaders: ["Content-Type", "Authorization"],
};
