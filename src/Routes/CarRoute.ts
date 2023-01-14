import express from 'express';
import CarController from '../Controllers/CarController';

const Router = express.Router();

Router.post('/', (req, res) => new CarController(req, res).insertCar());
Router.get('/', (req, res) => new CarController(req, res).getAll());
Router.get('/:id', (req, res) => new CarController(req, res).getFromID());
Router.put('/:id', (req, res) => new CarController(req, res).refreshCar());

export default Router;