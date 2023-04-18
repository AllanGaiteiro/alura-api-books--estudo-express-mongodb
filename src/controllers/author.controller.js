import Author from "../models/author.model.js";

class AuthorController {
  static async find(req, res) {
    try {
      const authors = await Author.find();
      res.status(200).json(authors);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: error.message });
    }
  }

  static async findById(req, res) {
    const id = req.params.id;

    try {
      const author = await Author.findById(id);
      if (author) {
        res.status(200).send(author);
      } else {
        res.status(400).send({ message: `Id do Autor ${id} não localizado` });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: error.message });
    }
  }

  static async create(req, res) {
    const author = new Author(req.body);

    try {
      const authorSaved = await author.save();
      res.status(201).send(authorSaved.toJSON());
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: error.message });
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const updates = req.body;

    try {
      const authorUpdated = await Author.findByIdAndUpdate(id, updates, {
        new: true,
      });
      if (authorUpdated) {
        res.status(200).send({ message: "Autor atualizado com sucesso" });
      } else {
        res.status(400).send({ message: `Id do Autor ${id} não localizado` });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: error.message });
    }
  }

  static async delete(req, res) {
    const { id } = req.params;

    try {
      const authorDeleted = await Author.findByIdAndDelete(id);
      if (authorDeleted) {
        res.status(200).send({ message: "Autor removido com sucesso" });
      } else {
        res.status(400).send({ message: `Id do Autor ${id} não localizado` });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: error.message });
    }
  }
}

export default AuthorController;
