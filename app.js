const express = require('express');
const routes = require('./routers/routes');

const app = express();

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded( {extended = true} ));
app.use(routes)




app.listen(process.env.PORT, () => console.log('listen on port 3000'));
