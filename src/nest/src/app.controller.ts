import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

import { Currency } from 'sbf-converter/currency/domain'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log(Currency);
    
    return this.appService.getHello();
  }
}
