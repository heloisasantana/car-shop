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
}
  
export default CarAbstract;
