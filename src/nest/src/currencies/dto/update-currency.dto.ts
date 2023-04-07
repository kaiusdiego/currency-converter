import { PartialType } from '@nestjs/mapped-types';
import { UpdateCurrencyUseCase } from 'sbf-converter/currency/application';
import { CreateCurrencyDto } from './create-currency.dto';

export class UpdateCurrencyDto extends CreateCurrencyDto
implements Omit<UpdateCurrencyUseCase.Input, 'id'> {}
