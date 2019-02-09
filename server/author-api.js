const express = require('express');
const router = express.Router();

const author = require('./author');

router.get('/', (req, res) => author.getAll(req, res));
router.get('/:id', (req, res) => author.getById(req, res));

module.exports = router;