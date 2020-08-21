const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {
})

routes.get('/gostack', (request, response) => {
    response.send('chegou')
})

routes.get('/igti', (request, response) => {
    response.send('chegou')
})

routes.get('/omnistack11', (request, response) => {
    response.send('chegou')
})

routes.get('/nlwomnistack', (request, response) => {
    response.send('chegou')
})

routes.get('/nlwdiscovery', (request, response) => {
    response.send('chegou')
})

routes.get('/imersaoalura', (request, response) => {
    response.send('chegou')
})



module.exports = routes