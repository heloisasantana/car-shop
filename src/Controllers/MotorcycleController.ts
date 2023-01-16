import { Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';
import IMotorcycle from '../Interfaces/IMotorcycle';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private service: MotorcycleService;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
    this.service = new MotorcycleService();
  }

  async insertMotorcycle() {
    try {
      const { body } = this.req;
      const insertedMotorcycle = await this.service.insertMotorcycleService(body as IMotorcycle);
      return this.res.status(201).json(insertedMotorcycle);
    } catch (err) {
      return this.res.status(404).json((err as Error).message);
    }
  }

  async getAll() {
    const allMotorcycles = await this.service.getAllService();
    return this.res.status(200).json(allMotorcycles);
  }

  async getFromID() {
    try {
      const motorcycleFromID = await this.service.getFromIDService(this.req.params.id);
      if (motorcycleFromID) return this.res.status(200).json(motorcycleFromID);
      return this.res.status(404).json({ message: 'Motorcycle not found' });
    } catch (err) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
}

export default MotorcycleController;