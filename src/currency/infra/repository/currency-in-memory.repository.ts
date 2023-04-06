import NotFoundError from "../../../@seedwork/domain/errors/not-found.error";
import InMemoryRepository from "../../../@seedwork/domain/repository/in-memory.repository";
import { Currency } from "../../domain/entities/currency"
import CurrencyRepository from "../../domain/repository/currency.repository";


export type ConversionResponse = {
  iso_code: string, 
  price: number
}


export default class CurrencyInMemoryRepository extends InMemoryRepository<Currency> 
implements CurrencyRepository{

  async findByIsoCode(iso_code: string): Promise<Currency[]>{

    const itemFound = this.items.filter(item => item.iso_code_to === iso_code)
    if(!itemFound){ 
      throw new NotFoundError(`Currency Not Found using iso code ${iso_code}`)
    }
    return itemFound
  }

  async convert(currencies: Currency[], price: number): Promise<ConversionResponse[]>{

    const conversions: ConversionResponse[] = []
    currencies.forEach(currency => {
      let c: ConversionResponse
      c.iso_code = currency.iso_code_from
      c.price = price/currency.quotation
      conversions.push(c)
    })
    return conversions
  }
  

}