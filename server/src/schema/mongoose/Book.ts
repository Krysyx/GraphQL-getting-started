import mongoose from "mongoose";
const { Schema, model } = mongoose;

const schema = new Schema({
  author: { type: String, required: true },
  pages: {
    marked: Number,
    non_marked: Number,
  },
  title: { type: String, required: true },
});

export default model("Book", schema);
