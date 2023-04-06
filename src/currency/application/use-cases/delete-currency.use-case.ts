import {default as DefaultUseCase} from '../../../@seedwork/application/use-case'
import CurrencyInMemoryRepository from '../../infra/repository/currency-in-memory.repository'

export namespace DeleteCurrencyUseCase{
  export class UseCase implements DefaultUseCase<Input, Output> {
    constructor(private currencyRepo: CurrencyInMemoryRepository) {}
  
    async execute(input: Input): Promise<Output> {
      await this.currencyRepo.delete(input.id)
    }
  }

  export type Input = {
    id: string
  }
  
  export type Output = void
  
}

export default DeleteCurrencyUseCase
