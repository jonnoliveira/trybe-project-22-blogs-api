const express = require('express');
const { userRouter } = require('./routers');

// ...

const app = express();

// não remova ou mova esse endpoint - ok
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...

app.use('/', userRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
