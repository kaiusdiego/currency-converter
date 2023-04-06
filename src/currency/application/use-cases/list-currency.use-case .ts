import {default as DefaultUseCase} from '../../../@seedwork/application/use-case'
import CurrencyInMemoryRepository, { ConversionResponse } from '../../infra/repository/currency-in-memory.repository'
import { CurrencyOutputMapper } from '../dto/currency-output'

export namespace ListCurrencyUseCase{
  export class UseCase implements DefaultUseCase<Input, Output> {
    constructor(private currencyRepo: CurrencyInMemoryRepository) {}
  
    async execute(input: Input): Promise<Output> {
      const entities = await this.currencyRepo.findByIsoCode(input.iso_code)
      const conversion = await this.currencyRepo.convert(entities,input.price)
      return CurrencyOutputMapper.toOutputConversions(conversion)
    }
  }

  export type Input = {
    id: string,
    iso_code: string,
    price: number
  }
  
  export type Output = ConversionResponse[]
  
}

export default ListCurrencyUseCase
