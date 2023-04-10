/* eslint-disable @typescript-eslint/no-namespace */
import {
  CreateCurrencyUseCase,
  UpdateCurrencyUseCase,
  GetCurrencyUseCase,
  ListCurrencyUseCase,
  DeleteCurrencyUseCase,
} from 'sbf-converter/currency/application';

import {CurrencyInMemoryRepository} from 'sbf-converter/currency/infra';

export namespace CURRENCY_PROVIDERS {
  export namespace REPOSITORIES {
    export const CURRENCY_IN_MEMORY_REPOSITORY = {
      provide: 'CurrencyInMemoryRepository',
      useClass: CurrencyInMemoryRepository,
    };

  }

  export namespace USE_CASES {
    export const CREATE_CURRENCY_USE_CASE = {
      provide: CreateCurrencyUseCase.UseCase,
      useFactory: (currencyRepo: CurrencyInMemoryRepository) => {
        return new CreateCurrencyUseCase.UseCase(currencyRepo);
      },
      inject: [REPOSITORIES.CURRENCY_IN_MEMORY_REPOSITORY.provide],
    };

    export const UPDATE_CURRENCY_USE_CASE = {
      provide: UpdateCurrencyUseCase.UseCase,
      useFactory: (currencyRepo: CurrencyInMemoryRepository) => {
        return new UpdateCurrencyUseCase.UseCase(currencyRepo);
      },
      inject: [REPOSITORIES.CURRENCY_IN_MEMORY_REPOSITORY.provide],
    };

    export const LIST_CATEGORIES_USE_CASE = {
      provide: ListCurrencyUseCase.UseCase,
      useFactory: (currencyRepo: CurrencyInMemoryRepository) => {
        return new ListCurrencyUseCase.UseCase(currencyRepo);
      },
      inject: [REPOSITORIES.CURRENCY_IN_MEMORY_REPOSITORY.provide],
    };

    export const GET_CURRENCY_USE_CASE = {
      provide: GetCurrencyUseCase.UseCase,
      useFactory: (currencyRepo: CurrencyInMemoryRepository) => {
        return new GetCurrencyUseCase.UseCase(currencyRepo);
      },
      inject: [REPOSITORIES.CURRENCY_IN_MEMORY_REPOSITORY.provide],
    };

    export const DELETE_CURRENCY_USE_CASE = {
      provide: DeleteCurrencyUseCase.UseCase,
      useFactory: (currencyRepo: CurrencyInMemoryRepository) => {
        return new DeleteCurrencyUseCase.UseCase(currencyRepo);
      },
      inject: [REPOSITORIES.CURRENCY_IN_MEMORY_REPOSITORY.provide],
    };
  }
}
