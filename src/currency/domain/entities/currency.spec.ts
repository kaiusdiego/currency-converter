import { Currency } from "./currency";


describe("Currency Unit Tests", () => {

  test("test currency constructor", ()=> {

    const props = {
      name: "Real",
      iso_code: "BRL",
      quotation: 1,
      is_active: true,
      created_at: new Date
    }

    //act
    const currency = new Currency(props);
    
    //assert
    expect(currency.props).toStrictEqual(props)

  })
})