const express = require('express');
const controllerRegistro = require('./controllers/RegistroController');

const routes = express.Router();

routes.get('/List', controllerRegistro.List);
routes.post('/Create', controllerRegistro.Create);

module.exports = routes;