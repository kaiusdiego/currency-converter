export type CurrencyProperties = {
  name: string; //eg: Real, USA Dollar
  iso_code: string; //eg: BRL, USD, etc
  quotation: number;
  is_active?: boolean;
  created_at?: Date;
};

export class Currency {
  constructor(public readonly props: CurrencyProperties) {
    this.name = this.props.name
    this.iso_code = this.props.iso_code
    this.props.is_active = this.props.is_active ?? true
    this.props.created_at = this.props.created_at ?? new Date
  }

  get name(){
   return this.props.name 
  }

  private set name(value: string){
    this.name = value
  }

  get iso_code(){
    return this.props.iso_code
  }

  private set iso_code(value: string){
    this.iso_code = value
  }

  get is_active(){
    return this.props.is_active
  }

  get created_at(){
    return this.props.created_at
  } 
}
