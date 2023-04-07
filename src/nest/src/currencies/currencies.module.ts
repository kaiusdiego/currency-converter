import { Module } from '@nestjs/common';
import { CurrenciesService } from './currencies.service';
import { CurrenciesController } from './currencies.controller';
import { CURRENCY_PROVIDERS } from './currencies.provider';

@Module({
  controllers: [CurrenciesController],
  providers: [
   CurrenciesService,
   ...Object.values(CURRENCY_PROVIDERS.REPOSITORIES),
   ...Object.values(CURRENCY_PROVIDERS.USE_CASES),
  ]
})
export class CurrenciesModule {}
