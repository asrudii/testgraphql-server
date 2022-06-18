const BookModel = require('./models/Book');

module.exports = {
  Query: {
    getAllBooks: async () => await BookModel.find({}),
    getBook: async (_, arg) => await BookModel.findById(arg._id),
  },

  Mutation: {
    createBook: async (_, arg) => {
      const book = new BookModel(arg);
      await book.save();
      return book;
    },
    updateBook: async (_, arg) => {
      const book = await BookModel.findByIdAndUpdate(arg._id, arg, {
        new: true,
      });
      return book;
    },
    deleteBook: async (_, arg) => {
      const book = await BookModel.findByIdAndRemove(arg._id);
      if (book) return true;
      return false;
    },
  },
};
