import { Currency } from "./currency";


describe("test of currency", () => {

  test("constructor of currency", ()=> {
    const currency = new Currency("Real");
    expect(currency.name).toBe("Real")
  })
})