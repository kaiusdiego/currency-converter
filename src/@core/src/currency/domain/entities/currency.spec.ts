import { Currency, CurrencyId, CurrencyProperties } from "./currency"
import { omit} from 'lodash'
import UniqueEntityId from "#seedwork/domain/value-object/unique-entity-id-vo"

describe("Currency Unit Tests", () => {

  beforeEach(() => {
    Currency.validate = jest.fn()
  })

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

    type CurrencyData = { props: CurrencyProperties, id?: CurrencyId}

    const data: CurrencyData[] = [
      {props: {iso_code_from: 'BRL', iso_code_to: 'USD', quotation: 1.5}},
      {props: {iso_code_from: 'BRL', iso_code_to: 'USD', quotation: 1.5}, id: null},
      {props: {iso_code_from: 'BRL', iso_code_to: 'USD', quotation: 1.5}, id: undefined},
      {props: {iso_code_from: 'BRL', iso_code_to: 'USD', quotation: 1.5}, id: new CurrencyId},
    ]

    data.forEach(i => {
      const currency = new Currency(i.props, i.id as any)
      expect(currency.id).not.toBeNull()
      expect(currency.uniqueEntityId).toBeInstanceOf(CurrencyId)        
    })

  })

  test("getter and setter of iso_code_from property", () => {
    const currency = new Currency({ 
      iso_code_from: 'BRL', 
      iso_code_to: 'USD', 
      quotation: 10,
      is_active: true,
    })
    expect(currency.iso_code_from).toBe("BRL")

    currency["iso_code_from"] = "USD"
    expect(currency.iso_code_from).toBe("USD")
  })


  test("getter and setter of iso_code_to property", () => {
    const currency = new Currency({ 
      iso_code_from: 'BRL', 
      iso_code_to: 'USD', 
      quotation: 5,
      is_active: true,
    })
    expect(currency.iso_code_to).toBe("USD")

    currency["iso_code_to"] = "USD"
    expect(currency.iso_code_to).toBe("USD")
  })


  test("getter and setter of quotation property", () => {
    const currency = new Currency({ 
      iso_code_from: 'BRL', 
      iso_code_to: 'USD', 
      quotation: 5.5,
      is_active: true,
    })
    expect(currency.quotation).toBe(5.5)

    currency["quotation"] = 5.5
    expect(currency.quotation).toBe(5.5)
  })



  test("getter and setter of is_active property", () => {
    const currency = new Currency({ 
      iso_code_from: 'BRL', 
      iso_code_to: 'USD', 
      quotation: 5.5,
      is_active: false,
    })
    expect(currency.is_active).toBe(false)

    currency["is_active"] = false
    expect(currency.is_active).toBe(false)
  })
  


  test("getter and setter of created_at property", () => {
    let created_at = new Date()

    const currency = new Currency({ 
      iso_code_from: 'BRL', 
      iso_code_to: 'USD', 
      quotation: 5.5,
      is_active: false,
      created_at
    })
    expect(currency.created_at).toBe(created_at)
  })

  it("should update a currency", () => {
    const currency = new Currency({ 
      iso_code_from: 'BRL', 
      iso_code_to: 'USD', 
      quotation: 5.5,
      is_active: false
    })
    currency.update("BRL","USD",5.2);
    expect(Currency.validate).toHaveBeenCalledTimes(2);
    expect(currency.quotation).toBe(5.2);
  });

  it("should active a currency", () => {
    const currency = new Currency({ 
      iso_code_from: 'BRL', 
      iso_code_to: 'USD', 
      quotation: 5.5,
      is_active: false
    })
    currency.activate();
    expect(currency.is_active).toBeTruthy();
  });

  test("should disable a currency", () => {
    const currency = new Currency({ 
      iso_code_from: 'BRL', 
      iso_code_to: 'USD', 
      quotation: 5.5,
      is_active: true
    })
    currency.deactivate();
    expect(currency.is_active).toBeFalsy();
  });
  
})