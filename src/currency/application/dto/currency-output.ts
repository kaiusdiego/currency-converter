import { Currency } from "../../domain/entities/currency"
import { ConversionResponse } from "../../infra/repository/currency-in-memory.repository"

export type CurrencyOutput = {
  id: string
  iso_code_from: string 
  iso_code_to: string
  quotation: number
  is_active: boolean
  created_at: Date
};

export class CurrencyOutputMapper {
  static toOutput(entity: Currency): CurrencyOutput {
    return entity.toJSON();
  }

  static toOutputConversions(conversions: ConversionResponse[]): ConversionResponse[] {
    return conversions
  }
  
}