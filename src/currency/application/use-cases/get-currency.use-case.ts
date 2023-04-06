import {default as DefaultUseCase} from '../../../@seedwork/application/use-case'
import CurrencyInMemoryRepository from '../../infra/repository/currency-in-memory.repository'
import { CurrencyOutput, CurrencyOutputMapper } from '../dto/currency-output'

export namespace GetCurrencyUseCase{
  export class UseCase implements DefaultUseCase<Input, Output> {
    constructor(private currencyRepo: CurrencyInMemoryRepository) {}
  
    async execute(input: Input): Promise<Output> {
      const entity = await this.currencyRepo.findById(input.id)
      return CurrencyOutputMapper.toOutput(entity)
    }
  }

  export type Input = {
    id: string
  }
  
  export type Output = CurrencyOutput
  
}

export default GetCurrencyUseCase
