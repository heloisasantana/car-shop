import { Request, Response } from 'express';
import CarService from '../Services/CarService';
import ICar from '../Interfaces/ICar';

class CarController {
  private req: Request;
  private res: Response;
  private service: CarService;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
    this.service = new CarService();
  }

  async insertCar() {
    const bodyCar: ICar = { ...this.req.body };
    try {
      const insertedCar = await this.service.insertCarService(bodyCar);
      return this.res.status(201).json(insertedCar);
    } catch (err) {
      return this.res.status(404).json((err as Error).message);
    }
  }

  async getAll() {
    const allCars = await this.service.getAllService();
    return this.res.status(200).json(allCars);
  }

  async getFromID() {
    try {
      const carFromID = await this.service.getFromIDService(this.req.params.id);
      if (carFromID) return this.res.status(200).json(carFromID);
      return this.res.status(404).json({ message: 'Car not found' });
    } catch (err) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }

  async refreshCar() {    
    try {
      const { body, params: { id } } = this.req;
      const refreshedCar = await this.service.refreshCarService(body, id);
      if (refreshedCar) return this.res.status(200).json(refreshedCar);
      return this.res.status(404).json({ message: 'Car not found' });
    } catch (err) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
}

export default CarController;