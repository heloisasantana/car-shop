import CarModel from '../Models/CarModel';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';

class CarService {
  private generateCarDomain(car: ICar | null): Car | null {
    if (!car) { return null; }
    return new Car(car);
  }

  async insertCarService(bodyCar: ICar) {
    const carModel = new CarModel();
    const newCar = await carModel.insertCarModel(bodyCar);
    return this.generateCarDomain(newCar);
  }
}

export default CarService;