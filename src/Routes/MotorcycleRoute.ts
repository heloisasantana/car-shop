import express from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const Router = express.Router();

Router.post('/', (req, res) => new MotorcycleController(req, res).insertMotorcycle());

export default Router;