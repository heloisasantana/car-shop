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
}

export default MotorcycleController;