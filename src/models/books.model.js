import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  editora: { type: String, required: true },
  numeroPaginas: { type: Number },
});

const Books = mongoose.model("boocks", bookSchema);

export default Books;
