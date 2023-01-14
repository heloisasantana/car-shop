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
}

export default CarController;