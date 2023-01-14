import express from 'express';
import CarController from '../Controllers/CarController';

const Router = express.Router();

Router.post('/', (req, res) => new CarController(req, res).insertCar());

export default Router;