import { Model, models, model, Schema } from 'mongoose';
  
abstract class CarAbstract<T> {
  private schema: Schema;
  private modelName: string;
  private model: Model<T>;
  
  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }
  
  async insertCarModel(bodyCar: T): Promise<T> { return this.model.create({ ...bodyCar }); }

  async getAll(): Promise<T[]> { return this.model.find(); }

  async getFromID(id: string): Promise<T | null> { return this.model.findById({ _id: id }); }
}
  
export default CarAbstract;
