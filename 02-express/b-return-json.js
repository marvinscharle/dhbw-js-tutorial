const express = require('express');
const app = express();

app.get('/user/:id', function (req, res) {
    const obj = {id: req.params.id};
    res
        .type('application/json')
        .status(200)
        .send(JSON.stringify(obj));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});