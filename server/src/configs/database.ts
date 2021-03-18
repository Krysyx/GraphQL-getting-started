import mongoose from "mongoose";
const { connect, connection } = mongoose;
const MONGO_URL = process.env.MONGO_URL!;

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

connect(MONGO_URL, options).catch((error) => console.error(error));

export default connection;
