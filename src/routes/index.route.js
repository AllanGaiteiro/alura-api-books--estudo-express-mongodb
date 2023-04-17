import express from "express";
import livros from "./book.route.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "Curso de node" });
  });

  app.use(express.json());
  app.use("/boocks", livros);
};

export default routes;
