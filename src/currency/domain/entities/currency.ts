import Entity from "@seedwork/domain/entity/entity";
import UniqueEntityId from "../../../@seedwork/domain/value-object/unique-entity-id-vo";

export type CurrencyProperties = {
  iso_code_from: string; //eg: BRL, USD, etc
  iso_code_to: string; //eg: BRL, USD, etc
  quotation: number;
  is_active?: boolean;
  created_at?: Date;
};

export class Currency extends Entity<CurrencyProperties> {
  
  constructor(public readonly props: CurrencyProperties, id?: UniqueEntityId) {
    super(props, id)
    this.props.is_active = this.props.is_active ?? true
    this.props.created_at = this.props.created_at ?? new Date
  }

  get iso_code_from(){
    return this.props.iso_code_from
  }

  private set iso_code_from(value: string){
    this.iso_code_from = value
  }

  get iso_code_to(){
    return this.props.iso_code_to
  }

  private set iso_code_to(value: string){
    this.iso_code_to = value
  }

  get quotation(){
    return this.props.quotation
  }

  private set quotation(value: number){
    this.quotation = value
  }

  get is_active(){
    return this.props.is_active
  }

  private set is_active(value: boolean){
    this.is_active = value ?? true
  }

  get created_at(){
    return this.props.created_at
  } 
}


// const a = new Currency({iso_code_from: 'BRL',
// iso_code_to'USD',quotation: 5})
