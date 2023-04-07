import NotFoundError from "../../../@seedwork/domain/errors/not-found.error";
import InMemoryRepository from "../../../@seedwork/domain/repository/in-memory.repository";
import { Currency } from "../../domain/entities/currency"
import CurrencyRepository from "../../domain/repository/currency.repository";


export type ConversionResponse = {
  iso_code: string, 
  price: number
}


export class CurrencyInMemoryRepository 
extends InMemoryRepository<Currency> 
implements CurrencyRepository.Repository{

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
      let c: ConversionResponse = {iso_code: "", price: 0}
      
      c.iso_code = currency.props.iso_code_from
      c.price = price/currency.props.quotation
      conversions.push(c)
    })
    return conversions
  }
  

}

export default CurrencyInMemoryRepository