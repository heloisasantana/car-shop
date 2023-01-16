import MotorcycleModel from '../Models/MotorcycleModel';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';

class MotorcycleService {
  private generateMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (!motorcycle) { return null; }
    return new Motorcycle(motorcycle);
  }

  async insertMotorcycleService(motorcycle: IMotorcycle) {
    const motorcycleModel = new MotorcycleModel();
    const newMotorcycle = await motorcycleModel.insert(motorcycle);
    return this.generateMotorcycleDomain(newMotorcycle);
  }

  async getAllService() {
    const motorcycleModel = new MotorcycleModel();
    const allMotorcycles = await motorcycleModel.getAll();
    return allMotorcycles.map((element) => this.generateMotorcycleDomain(element));
  }

  async getFromIDService(id: string) {
    const motorcycleModel = new MotorcycleModel();
    const motorcycleFromID = await motorcycleModel.getFromID(id);
    return this.generateMotorcycleDomain(motorcycleFromID);
  }
}

export default MotorcycleService;