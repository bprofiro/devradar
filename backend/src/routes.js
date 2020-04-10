const { Router } = require('express');

const DevControler = require('./controlers/DevControler');
const SearchControler = require('./controlers/SearchControler');

const routes = Router();

routes.get('/devs', DevControler.index);
routes.post('/devs', DevControler.store);

routes.get('/search', SearchControler.index);

module.exports = routes;