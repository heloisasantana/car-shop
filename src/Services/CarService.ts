import CarModel from '../Models/CarModel';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';

class CarService {
  private generateCarDomain(car: ICar | null): Car | null {
    if (!car) { return null; }
    return new Car(car);
  }

  async insertCarService(car: ICar) {
    const carModel = new CarModel();
    const newCar = await carModel.insert(car);
    return this.generateCarDomain(newCar);
  }

  async getAllService() {
    const carModel = new CarModel();
    const allCars = await carModel.getAll();
    return allCars.map((element) => this.generateCarDomain(element));
  }

  async getFromIDService(id: string) {
    const carModel = new CarModel();
    const carFromID = await carModel.getFromID(id);
    return this.generateCarDomain(carFromID);
  }

  async refreshCarService(car: ICar, id: string) {
    const carModel = new CarModel();
    await carModel.refresh(car, id);
    const carFromID = await carModel.getFromID(id);
    return this.generateCarDomain(carFromID);
  }
}

export default CarService;