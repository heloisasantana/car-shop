import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';

describe('Testes da camada CarService', function () {
  const carInput: ICar = {
    model: 'Marea',
    year: 1992,
    color: 'Red',
    status: true,
    buyValue: 12.000,
    doorsQty: 2,
    seatsQty: 5,
  };

  const carOutput: Car = new Car({
    id: '634852326b35b59438fbea2f',
    model: 'Marea',
    year: 1992,
    color: 'Red',
    status: true,
    buyValue: 12.000,
    doorsQty: 2,
    seatsQty: 5,
  });

  it('Verifica se é possível cadastrar um carro corretamente', async function () {
    sinon.stub(Model, 'create').resolves(carOutput);
    const service = new CarService();
    const result = await service.insertCarService(carInput);

    expect(result).to.be.deep.equal(carOutput);
  });

  before(function () { sinon.restore(); });
});