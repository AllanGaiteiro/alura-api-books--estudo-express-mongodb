import Boocks from "../models/books.model.js";

class BookController {
  static async find(req, res) {
    try {
      const livros = await Boocks.find();
      res.status(200).json(livros);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: error.message });
    }
  }

  static async findById(req, res) {
    const id = req.params.id;

    try {
      const livro = await Boocks.findById(id);
      if (livro) {
        res.status(200).send(livro);
      } else {
        res.status(400).send({ message: `Id do livro ${id} não localizado` });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: error.message });
    }
  }

  static async add(req, res) {
    let livro = new Boocks(req.body);

    try {
      const livroSaved = await livro.save();
      console.log("Document saved!");
      res.status(201).send(livroSaved);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: error.message });
    }
  }

  static async update(req, res) {
    const id = req.params.id;
    const updates = req.body;

    try {
      const livroAtualizado = await Boocks.findByIdAndUpdate(id, updates, {
        new: true,
      });
      if (livroAtualizado) {
        res.status(200).send({ message: "Livro atualizado com sucesso" });
      } else {
        res.status(400).send({ message: `Id do livro ${id} não localizado` });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: error.message });
    }
  }

  static async delete(req, res) {
    const id = req.params.id;

    try {
      const livroExcluido = await Boocks.findByIdAndDelete(id);
      if (livroExcluido) {
        res.status(200).send({ message: "Livro removido com sucesso" });
      } else {
        res.status(400).send({ message: `Id do livro ${id} não localizado` });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: error.message });
    }
  }
}

export default BookController;
