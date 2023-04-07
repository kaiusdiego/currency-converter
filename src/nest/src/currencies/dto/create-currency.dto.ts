import { CreateCurrencyUseCase } from 'sbf-converter/currency/application';
import { IsNotEmpty, IsString, IsNumber, MaxLength } from 'class-validator';
export class CreateCurrencyDto implements CreateCurrencyUseCase.Input {
  @MaxLength(3)
  @IsString()
  @IsNotEmpty()
  iso_code_from: string

  @MaxLength(3)
  @IsString()
  @IsNotEmpty()
  iso_code_to: string

  @IsNumber()
  quotation: number

}
