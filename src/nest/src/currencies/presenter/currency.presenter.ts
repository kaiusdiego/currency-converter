import { Transform } from 'class-transformer';
import {
  CurrencyOutput,
 ListCurrencyUseCase
} from 'sbf-converter/currency/application';
import { ConversionResponse } from 'sbf-converter/currency/infra';

export namespace Presenter{
  export class ConversionPresenter {
    iso_code: string
    price: number
  
    constructor(output: ConversionResponse) {

      this.iso_code = output.iso_code;
      this.price = output.price;
    }
  }

  export class CurrencyPresenter {
    id: string
    iso_code_from: string
    iso_code_to: string
    quotation: number
    is_active: boolean;

    @Transform(({ value }: { value: Date }) => {
      return value.toISOString();
    })
    created_at: Date;
  
    constructor(output: CurrencyOutput) {
      this.iso_code_from = output.iso_code_from;
      this.iso_code_to = output.iso_code_to;
      this.quotation = output.quotation;
      this.is_active = output.is_active;
      this.created_at = output.created_at;
    }
  }

  export class ConversionDataPresenter {
    data: ConversionPresenter[];
    
    constructor(output: ListCurrencyUseCase.Output) {
      this.data = output.map((item) => new ConversionPresenter(item));
    }
  }

}

