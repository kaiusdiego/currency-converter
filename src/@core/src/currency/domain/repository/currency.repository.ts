import { RepositoryInterface } from "../../../@seedwork/domain/repository/repository-contracts";
import { Currency } from "../entities/currency";

export namespace CurrencyRepository {
  export interface Repository extends RepositoryInterface<Currency>{}

}

export default CurrencyRepository
