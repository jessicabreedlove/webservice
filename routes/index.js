import { Router} from 'express';
import moviesRouter from './movies.js';
// import homeRouter from './home.js';

const routes = Router()

// routes.use('/movies', moviesRouter);
routes.use('/movies', moviesRouter);

export default routes;