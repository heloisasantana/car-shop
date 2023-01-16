import { Schema } from 'mongoose';
import AbstractODM from './AbstractODM';
import IMotorcycle from '../Interfaces/IMotorcycle';

class MotorcycleModel extends AbstractODM<IMotorcycle> {
  constructor() {
    const newSchema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super(newSchema, 'motorcycle');
  }
}

export default MotorcycleModel;