import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishingCompany: { type: String, required: true },
  pageLength: { type: Number },
});

const Book = mongoose.model("book", bookSchema);

export default Book;
