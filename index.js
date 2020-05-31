const express = require('express');

const app = express();

app.get('/teste', (request, response) =>{
  return response({ hello: 'word' });
});


app.listen(3333);