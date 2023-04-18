import express from "express";
import Author from "./author.route.js";
import Book from "./book.route.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "Curso de node" });
  });

  app.use(express.json());
  app.use("/book", Book);
  app.use("/author", Author);
};

export default routes;
