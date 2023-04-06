import { RepositoryInterface } from "../../../@seedwork/domain/repository/repository-contracts";
import { Currency } from "../entities/currency";

export default interface CurrencyRepository extends RepositoryInterface<Currency>{}