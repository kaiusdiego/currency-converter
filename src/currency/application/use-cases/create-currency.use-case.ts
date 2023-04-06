import {default as DefaultUseCase} from '../../../@seedwork/application/use-case'
import { Currency } from '../../domain/entities/currency'
import CurrencyInMemoryRepository from '../../infra/repository/currency-in-memory.repository'
import { CurrencyOutput, CurrencyOutputMapper } from '../dto/currency-output'

export namespace CreateCurrencyUseCase{
  export class UseCase implements DefaultUseCase<Input, Output> {
    constructor(private currencyRepo: CurrencyInMemoryRepository) {}
  
    async execute(input: Input): Promise<Output> {
      const entity = new Currency(input)
      await this.currencyRepo.insert(entity)
      return CurrencyOutputMapper.toOutput(entity)
    }
  }

  export type Input = {
    iso_code_from: string, 
    iso_code_to: string, 
    quotation: number
  }
  
  export type Output = CurrencyOutput
  
}

export default CreateCurrencyUseCase
