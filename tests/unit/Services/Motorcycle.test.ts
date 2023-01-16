import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotoService from '../../../src/Services/MotorcycleService';
import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

describe('Testes da camada MotorcycleService', function () {
  const motorcycleInput: IMotorcycle = {
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  };

  const motorcycleOutput: Motorcycle = new Motorcycle({
    id: '6348513f34c397abcad040b2',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  });
    
  it('Verifica se é possível cadastrar uma moto corretamente', async function () {
    sinon.stub(Model, 'create').resolves(motorcycleOutput);
    const service = new MotoService();
    const result = await service.insertMotorcycleService(motorcycleInput);
      
    expect(result).to.be.deep.equal(motorcycleOutput);
  });

  before(function () { sinon.restore(); });
});
