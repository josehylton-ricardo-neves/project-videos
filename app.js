const { Router } = require('express');

const app = require('express')();
const routes = require('./routers/routes')

require('dotenv').config();

app.use(routes)




app.listen(process.env.PORT, () => console.log('listen on port 3000'));