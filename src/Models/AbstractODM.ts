import { Model, models, model, Schema, UpdateQuery } from 'mongoose';
  
abstract class AbstractODM<T> {
  private schema: Schema;
  private modelName: string;
  private model: Model<T>;
  
  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }
  
  async insert(body: T): Promise<T> { return this.model.create({ ...body }); }
 
  async getAll(): Promise<T[]> { return this.model.find(); }

  async getFromID(id: string): Promise<T | null> { return this.model.findById({ _id: id }); }

  async refresh(body: T, id: string): Promise<T | null> {
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...body } as UpdateQuery<T>,
      { new: true },
    );
  }
}
  
export default AbstractODM;
