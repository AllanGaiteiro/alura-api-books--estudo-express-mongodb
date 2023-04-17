import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://allansgaiteiro:9KxpuvzRe1pKsGAm@cluster0.fq3llpg.mongodb.net/dev"
);

let db = mongoose.connection;

export default db;
