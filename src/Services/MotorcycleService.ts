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
}

export default MotorcycleService;