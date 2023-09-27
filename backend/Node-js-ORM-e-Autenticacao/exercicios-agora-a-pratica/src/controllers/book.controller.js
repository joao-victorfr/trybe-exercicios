const BookService = require('../services/book.service');

const error500Message = 'Algo deu errado';

const getAll = async (_req, res) => {
  try {
    const books = await BookService.getAll();
    return res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: 'Ocorreu um erro' })
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookService.getById(id);

    if (!book) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: error500Message });
  }
};

module.exports = {
  getAll,
  getById,
};