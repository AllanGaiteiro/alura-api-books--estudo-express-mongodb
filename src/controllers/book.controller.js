import Book from "../models/book.model.js";

class BookController {
  static async find(req, res) {
    try {
      const livros = await Book.find();
      res.status(200).json(livros);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: error.message });
    }
  }

  static async findById(req, res) {
    const { id } = req.params;

    try {
      const livro = await Book.findById(id);
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
    let book = new Book(req.body);

    try {
      const bookSaved = await book.save();
      console.log("Document saved!");
      res.status(201).send(bookSaved);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: error.message });
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const updates = req.body;

    try {
      const livroAtualizado = await Book.findByIdAndUpdate(id, updates, {
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
    const { id } = req.params;

    try {
      const bookdeleted = await Book.findByIdAndDelete(id);
      if (bookdeleted) {
        res.status(200).send({ message: "Livro removido com sucesso" });
      } else {
        res.status(400).send({ message: `Id do livro ${id} não localizado` });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: error.message });
    }
  }

  static findByPublishingCompany = (req, res) => {
    const { publishing_company: publishingCompany } = req.query;

    Book.find({ publishingCompany }, {}, (err, livros) => {
      res.status(200).send(livros);
    });
  };
}

export default BookController;
