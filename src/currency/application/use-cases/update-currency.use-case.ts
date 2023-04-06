import {default as DefaultUseCase} from '../../../@seedwork/application/use-case'
import CurrencyInMemoryRepository from '../../infra/repository/currency-in-memory.repository'
import { CurrencyOutput, CurrencyOutputMapper } from '../dto/currency-output'

export namespace UpdateCurrencyUseCase{
  export class UseCase implements DefaultUseCase<Input, Output> {
    constructor(private currencyRepo: CurrencyInMemoryRepository) {}
  
    async execute(input: Input): Promise<Output> {
      const entity = await this.currencyRepo.findById(input.id)

      entity.update(input.iso_code_from, input.iso_code_to, input.quotation)
      
      if (input.is_active === true) entity.activate()
    
      if (input.is_active === false) entity.deactivate()

      await this.currencyRepo.update(entity)
      
      return CurrencyOutputMapper.toOutput(entity)
    }
  }

  export type Input = {
    id: string,
    iso_code_from: string, 
    iso_code_to: string, 
    quotation: number,
    is_active?: boolean
  }
  
  export type Output = CurrencyOutput
  
}

export default UpdateCurrencyUseCase
