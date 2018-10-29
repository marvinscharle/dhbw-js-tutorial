const app = require('express')();
const bodyParser = require('body-parser');
const multer = require('multer'); // v1.0.5
const upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/profile', upload.array(), function (req, res) {
  console.log(req.body);
  res.json(req.body);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });