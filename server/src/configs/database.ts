import mongoose from "mongoose";
const MONGO_URL = process.env.MONGO_URL!;

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

mongoose.connect(MONGO_URL, options).catch((error) => console.error(error));

export default mongoose.connection;
