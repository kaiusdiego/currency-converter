import { EntityValidationError } from "../../../@seedwork/domain/errors/validator-error";
import Entity from "../../../@seedwork/domain/entity/entity";
import UniqueEntityId from "../../../@seedwork/domain/value-object/unique-entity-id-vo";
import CurrencyValidatorFactory from "../validators/currency.validator";

export type CurrencyProperties = {
  iso_code_from: string; //eg: BRL, USD, etc
  iso_code_to: string; //eg: BRL, USD, etc
  quotation: number;
  is_active?: boolean;
  created_at?: Date;
};


export class CurrencyId extends UniqueEntityId{}
export class Currency extends Entity<CurrencyProperties> {
  
  constructor(public readonly props: CurrencyProperties, entityId?: CurrencyId) {
    super(props, entityId ?? new CurrencyId())
    Currency.validate(props)
    this.props.is_active = this.props.is_active ?? true
    this.props.created_at = this.props.created_at ?? new Date
  }

  update(iso_code_from: string, iso_code_to: string, quotation: number): void {
    
    Currency.validate({
      iso_code_from,
      iso_code_to,
      quotation,
    })

    this.iso_code_from = iso_code_from
    this.iso_code_to = iso_code_to
    this.quotation = quotation;
  }



  static validate(props: CurrencyProperties) {
    const validator = CurrencyValidatorFactory.create();
    const isValid = validator.validate(props);
    if (!isValid) {
      throw new EntityValidationError(validator.errors);
    }
  }

  get iso_code_from(){
    return this.props.iso_code_from
  }

  private set iso_code_from(value: string){
    this.props.iso_code_from = value
  }

  get iso_code_to(){
    return this.props.iso_code_to
  }

  private set iso_code_to(value: string){
    this.props.iso_code_to = value
  }

  get quotation(){
    return this.props.quotation
  }

  private set quotation(value: number){
    this.props.quotation = value
  }

  get is_active(){
    return this.props.is_active
  }

  private set is_active(value: boolean){
    this.props.is_active = value ?? true
  }

  get created_at(){
    return this.props.created_at
  }
  
  activate() {
    this.props.is_active = true
  }

  deactivate() {
    this.props.is_active = false
  }

}

