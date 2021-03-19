import mongoose from "mongoose";
const { Schema, model } = mongoose;

const schema = new Schema({
  firstname: String,
  lastname: { type: String, unique: true },
  age: Number,
});

export default model("Author", schema);
