import { Currency } from "./currency"
import { omit} from 'lodash'

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
})