import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator"
import ClassValidatorFields from "../../../@seedwork/domain/validators/class-validator-fields"
import { CurrencyProperties } from "../entities/currency"

export class CurrencyRules {
  @MaxLength(3)
  @IsString()
  @IsNotEmpty()
  iso_code_from: string

  @MaxLength(3)
  @IsString()
  @IsNotEmpty()
  iso_code_to: string

  @IsNumber()
  quotation: number

  @IsBoolean()
  @IsOptional()
  is_active: string

  @IsDate()
  @IsOptional()
  created_at: Date

  constructor({
    iso_code_from,
    iso_code_to,
    quotation,
    is_active,
    created_at,
  }: CurrencyProperties) {
    Object.assign(this, { iso_code_from, iso_code_to, quotation, is_active, created_at })
  }
}

export class CurrencyValidator extends ClassValidatorFields<CurrencyRules> {
  validate(data: CurrencyProperties): boolean {
    return super.validate(new CurrencyRules(data ?? {} as any))
  }
}


export class CurrencyValidatorFactory{
    static create(){
        return new CurrencyValidator()
    }
}

export default CurrencyValidatorFactory