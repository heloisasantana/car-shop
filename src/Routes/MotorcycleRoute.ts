import express from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const Router = express.Router();

Router.post('/', (req, res) => new MotorcycleController(req, res).insertMotorcycle());
Router.get('/', (req, res) => new MotorcycleController(req, res).getAll());
Router.get('/:id', (req, res) => new MotorcycleController(req, res).getFromID());
Router.put('/:id', (req, res) => new MotorcycleController(req, res).refreshMotorcycle());

export default Router;