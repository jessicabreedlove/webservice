import express from 'express';
import moviesController from '../controllers/movies.js';

const router = express.Router();

router.get('/', moviesController.getMovies);

module.exports = routes;