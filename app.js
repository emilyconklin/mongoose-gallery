const path = require('path');
const express = require('express');
const ejs = require('ejs');
const images = require('./images');
const app = express();

app.locals.images = images
app.set('view engine', 'ejs'); // allows us to exclude the file extension

app.get('/', function (req, res) {
  res.render('index', {});
});

app.get('/pics', function (req, res) {
  res.render('pics', {});
});

// Akash helped me with this part

app.get('/images/:id', function (req, res) {
  app.locals.photoid = req.params.id;
  res.render('images', {});
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});