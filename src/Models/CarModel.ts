import { Schema } from 'mongoose';
import CarAbstract from './CarAbstract';
import ICar from '../Interfaces/ICar';

class CarModel extends CarAbstract<ICar> {
  constructor() {
    const newSchema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(newSchema, 'car');
  }
}

export default CarModel;