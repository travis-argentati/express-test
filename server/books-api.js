const express = require('express');
const router = express.Router();

const authors = require('./books');

router.get('/', (req, res) => authors.getAll(req, res));
router.get('/:id', (req, res) => authors.getById(req, res));

module.exports = router;
