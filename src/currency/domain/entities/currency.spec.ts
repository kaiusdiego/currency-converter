import { Currency, CurrencyProperties } from "./currency"
import { omit} from 'lodash'
import UniqueEntityId from "../../../@seedwork/domain/value-object/unique-entity-id-vo"

describe("Currency Unit Tests", () => {

  test("test currency constructor", ()=> {

    let currency = new Currency({ 
      iso_code_from: 'BRL', 
      iso_code_to: 'USD', 
      quotation: 10 
    })

    const props = omit(currency.props, 'created_at')

    expect(props).toStrictEqual({
      iso_code_from: 'BRL',
      iso_code_to: 'USD',
      quotation: 10,
      is_active: true,
    })

    expect(currency.created_at).toBeInstanceOf(Date)

    currency = new Currency({ 
      iso_code_from: 'BRL', 
      iso_code_to: 'USD', 
      quotation: 10,
      is_active: false 
    })
  
    let created_at = new Date()

    expect(currency.props).toStrictEqual({
      iso_code_from: 'BRL',
      iso_code_to: 'USD',
      quotation: 10,
      is_active: false,
      created_at
    })

    currency = new Currency({ 
      iso_code_from: 'BRL', 
      iso_code_to: 'USD', 
      quotation: 10,
      is_active: true,
      created_at 
    })
  
    expect(currency.props.created_at).toBe(created_at)


  })

  test("test id field", ()=> {

    type CurrencyData = { props: CurrencyProperties; id?: UniqueEntityId}

    const data: CurrencyData[] = [
      {props: {iso_code_from: 'BRL', iso_code_to: 'USD', quotation: 1.5}},
      {props: {iso_code_from: 'BRL', iso_code_to: 'USD', quotation: 1.5}, id: null},
      {props: {iso_code_from: 'BRL', iso_code_to: 'USD', quotation: 1.5}, id: undefined},
      {props: {iso_code_from: 'BRL', iso_code_to: 'USD', quotation: 1.5}, id: new UniqueEntityId},
    ]

    data.forEach(i => {
      const currency = new Currency(i.props, i.id as any)
      expect(currency.id).not.toBeNull()
      expect(currency.uniqueEntityId).toBeInstanceOf(UniqueEntityId)        
    });

  })
})