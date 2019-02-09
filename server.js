const express = require('express');
const app = express();
const port = 3000;

// implement API routes
const authorAPI = require('./server/author-api');

app.use('/authors', authorAPI);

// catch all other routes and return just a simple message
app.all('*', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Express Test app listening on port ${port}!`));