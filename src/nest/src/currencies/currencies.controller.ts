import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common'
import { CreateCurrencyUseCase, CurrencyOutput, DeleteCurrencyUseCase, ListCurrencyUseCase, UpdateCurrencyUseCase } from 'sbf-converter/currency/application'
import { CreateCurrencyDto } from './dto/create-currency.dto'
import { UpdateCurrencyDto } from './dto/update-currency.dto'

@Controller('currencies')
export class CurrenciesController {

  @Inject(CreateCurrencyUseCase.UseCase)
  private createUseCase: CreateCurrencyUseCase.UseCase

  @Inject(ListCurrencyUseCase.UseCase)
  private listUseCase: ListCurrencyUseCase.UseCase

  @Inject(UpdateCurrencyUseCase.UseCase)
  private updateUseCase: UpdateCurrencyUseCase.UseCase

  @Inject(DeleteCurrencyUseCase.UseCase)
  private deleteUseCase: DeleteCurrencyUseCase.UseCase

  @Post()
  async create(@Body() createCurrencyDto: CreateCurrencyDto) {
    return await this.createUseCase.execute(createCurrencyDto)
  }

  @Get()
  findAll() {
    return []
  }

  @Get(':iso_code/:price')
  async findOne( @Param('iso_code') iso_code: string, @Param('price') price: number) {
    return await this.listUseCase.execute({iso_code,price})
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCurrencyDto: UpdateCurrencyDto) {
    return await this.updateUseCase.execute({
      id,
      ...updateCurrencyDto,
    })
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
      return this.deleteUseCase.execute({id})
  }
}
