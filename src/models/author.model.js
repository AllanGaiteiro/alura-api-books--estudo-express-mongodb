import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, required: true },
    nacionalization: { type: String },
  },
  {
    versionKey: false,
  }
);

const Author = mongoose.model("authors", AuthorSchema);

export default Author;
