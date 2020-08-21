const { Router } = require('express');

const app = require('express')();
const routes = require('./routers/routes')

app.use(routes)

app.listen(3000, () => console.log('listen on port 3000'));