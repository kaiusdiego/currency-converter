import { CreateCurrencyUseCase, ListCurrencyUseCase, UpdateCurrencyUseCase } from 'sbf-converter/currency/application'
import { CurrenciesController } from './currencies.controller'
import { CreateCurrencyDto } from './dto/create-currency.dto'
import { UpdateCurrencyDto } from './dto/update-currency.dto'

describe('CurrenciesController', () => {
  let controller: CurrenciesController

  beforeEach(async () => {
    controller = new CurrenciesController()
  })

  it('should creates a new currency', async () => {
    const expectedOutput: CreateCurrencyUseCase.Output = {
      id: '62236c07-8783-4f1e-b33a-a7c37db9b02c',
      iso_code_from: "USD",
      iso_code_to: "BRL",
      quotation: 5,
      is_active: true,
      created_at: new Date()
    }

    const MockCreateUseCase = {
      execute: jest.fn().mockReturnValue(Promise.resolve(expectedOutput))
    }

    //@ts-expect-error
    controller["createUseCase"] = MockCreateUseCase

    let input: CreateCurrencyDto = {
      iso_code_from: 'USD',
      iso_code_to: 'BRL',
      quotation: 5,
    }

    const output = await controller.create(input)

    expect(MockCreateUseCase.execute).toHaveBeenCalledWith(input)

    expect(expectedOutput).toStrictEqual(output)
  })

  it('should update a currency', async () => {

    const id = '62236c07-8783-4f1e-b33a-a7c37db9b02c'

    const expectedOutput: UpdateCurrencyUseCase.Output = {
      id,
      iso_code_from: "USD",
      iso_code_to: "BRL",
      quotation: 5,
      is_active: true,
      created_at: new Date()
    }

    const MockUpdateUseCase = {
      execute: jest.fn().mockReturnValue(Promise.resolve(expectedOutput))
    }

    //@ts-expect-error
    controller["updateUseCase"] = MockUpdateUseCase

    let input: UpdateCurrencyDto = {
      iso_code_from: 'USD',
      iso_code_to: 'BRL',
      quotation: 5.5,
    }

    const output = await controller.update(id,input)

    expect(MockUpdateUseCase.execute).toHaveBeenCalledWith({id, ...input})

    expect(expectedOutput).toStrictEqual(output)
  })

  it('should get a conversion', async () => {
     
    const expectedOutput: ListCurrencyUseCase.Output = [
      {iso_code: 'USD', price: 20}
    ]

    const MockConversionUseCase = {
      execute: jest.fn().mockReturnValue(Promise.resolve(expectedOutput))
    }

    //@ts-expect-error
    controller["listUseCase"] = MockConversionUseCase
    const iso_code = 'BRL'
    const price = 100

    const output = await controller.findOne(iso_code,price)
    
    expect(MockConversionUseCase.execute)
    .toHaveBeenCalledWith({iso_code,price})

    expect(expectedOutput).toStrictEqual(output)

  })

  it('should delete a currency', async () => {
    const expectedOutput = undefined

    const mockDeleteUseCase = {
      execute: jest.fn().mockReturnValue(Promise.resolve(expectedOutput))
    }

    //@ts-expect-error
    controller['deleteUseCase'] = mockDeleteUseCase

    const id = '62236c07-8783-4f1e-b33a-a7c37db9b02c'

    expect(controller.remove(id)).toBeInstanceOf(Promise)

    const output = await controller.remove(id)
    expect(mockDeleteUseCase.execute).toBeCalledWith({id})
    expect(expectedOutput).toStrictEqual(output)
  })

  
})
