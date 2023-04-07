import { Inject, Injectable } from '@nestjs/common';
import { CreateCurrencyUseCase, ListCurrencyUseCase } from 'sbf-converter/currency/application';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';

@Injectable()
export class CurrenciesService {

 
  create(createCurrencyDto: CreateCurrencyDto) {
    return 'This action adds a new currency';
  }

  findAll() {
    return `This action returns all currencies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} currency`;
  }

  update(id: number, updateCurrencyDto: UpdateCurrencyDto) {
    return `This action updates a #${id} currency`;
  }

  remove(id: number) {
    return `This action removes a #${id} currency`;
  }
}
