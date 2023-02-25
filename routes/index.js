const routes = require('express').Router();

routes.use('/', require('./home'));
routes.use('/movies', require('./movies'));

module.exports = routes;