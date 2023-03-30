export type CurrencyProperties = {
  name: string; //eg: Real, USA Dollar
  iso_code: string; //eg: BRL, USD, etc
  quotation: number;
  is_active?: boolean;
  created_at?: Date;
};

export class Currency {
  constructor(readonly props: CurrencyProperties) {}

  get name(){
   return this.props.name 
  }

  get iso_code(){
    return this.props.iso_code
  }

  get is_active(){
    return this.props.is_active
  }

  get created_at(){
    return this.props.created_at
  } 
}
