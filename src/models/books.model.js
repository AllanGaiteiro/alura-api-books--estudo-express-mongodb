import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishingCompany: { type: String, required: true },
  pageLength: { type: Number },
});

const Books = mongoose.model("boocks", bookSchema);

export default Books;
