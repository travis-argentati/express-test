const authors = require('../data/authors.json');

const author = {
  getAll: (req, res) => {
    if (authors) {
      return res.status(200).send(authors);
    } else {
      return res.sendStatus(404);
    }
  },

  getById: (req, res) => {
    const auth = authors.filter(a => a.Id == req.params.id);
    if (auth && auth.length) {
      return res.status(200).send(auth);
    } else {
      return res.sendStatus(404);
    }
  }
};

module.exports = author;
