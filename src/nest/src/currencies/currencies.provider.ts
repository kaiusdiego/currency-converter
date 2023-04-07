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
      useFactory: (categoryRepo: CurrencyInMemoryRepository) => {
        return new CreateCurrencyUseCase.UseCase(categoryRepo);
      },
      inject: [REPOSITORIES.CURRENCY_IN_MEMORY_REPOSITORY.provide],
    };

    export const UPDATE_CURRENCY_USE_CASE = {
      provide: UpdateCurrencyUseCase.UseCase,
      useFactory: (categoryRepo: CurrencyInMemoryRepository) => {
        return new UpdateCurrencyUseCase.UseCase(categoryRepo);
      },
      inject: [REPOSITORIES.CURRENCY_IN_MEMORY_REPOSITORY.provide],
    };

    export const LIST_CATEGORIES_USE_CASE = {
      provide: ListCurrencyUseCase.UseCase,
      useFactory: (categoryRepo: CurrencyInMemoryRepository) => {
        return new ListCurrencyUseCase.UseCase(categoryRepo);
      },
      inject: [REPOSITORIES.CURRENCY_IN_MEMORY_REPOSITORY.provide],
    };

    export const GET_CURRENCY_USE_CASE = {
      provide: GetCurrencyUseCase.UseCase,
      useFactory: (categoryRepo: CurrencyInMemoryRepository) => {
        return new GetCurrencyUseCase.UseCase(categoryRepo);
      },
      inject: [REPOSITORIES.CURRENCY_IN_MEMORY_REPOSITORY.provide],
    };

    export const DELETE_CURRENCY_USE_CASE = {
      provide: DeleteCurrencyUseCase.UseCase,
      useFactory: (categoryRepo: CurrencyInMemoryRepository) => {
        return new DeleteCurrencyUseCase.UseCase(categoryRepo);
      },
      inject: [REPOSITORIES.CURRENCY_IN_MEMORY_REPOSITORY.provide],
    };
  }
}
