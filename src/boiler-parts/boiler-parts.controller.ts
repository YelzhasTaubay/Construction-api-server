import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { BoilerPartsService } from './boiler-parts.service';
import { AuthenticatedGuard } from '../auth/authenticated.guard';
import {PaginateAndFilterResponse,
        FindOneResponse,
        GetBestsellersResponse,
        GetNewResponse,
        SearchResponse,
        SearchRequest,
        GetByNameResponse,
        GetByNameRequest
}  from './types';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';


@Controller('boiler-parts')
export class BoilerPartsController {

  constructor(private readonly boilerPartsService: BoilerPartsService) {
  }

  @ApiOkResponse({type: PaginateAndFilterResponse})
  @UseGuards(AuthenticatedGuard)
  @Get()
  paginateAndFilter(@Query() query) {
    return this.boilerPartsService.paginateAndFilter(query);
  }

  @ApiOkResponse({type: FindOneResponse})
  @UseGuards(AuthenticatedGuard)
  @Get('find/:id')
  getOne(@Param('id') id: string) {
    return this.boilerPartsService.findOne(id);
  }

  @ApiOkResponse({type: GetBestsellersResponse})
  @UseGuards(AuthenticatedGuard)
  @Get('bestsellers')
  getBestSellers(){
    return this.boilerPartsService.bestsellers();
  }

  @ApiOkResponse({type: GetNewResponse})
  @UseGuards(AuthenticatedGuard)
  @Get('new')
  getNew(){
    return this.boilerPartsService.new();
  }

  @ApiOkResponse({type: SearchResponse})
  @ApiBody({type: SearchRequest})
  @UseGuards(AuthenticatedGuard)
  @Post('search')
  search(@Body() {search}: {search: string}) {
    return this.boilerPartsService.searchByString(search);
  }

  @ApiOkResponse({type: GetByNameResponse})
  @ApiBody({type: GetByNameRequest})
  @UseGuards(AuthenticatedGuard)
  @Post('name')
  getByName(@Body() {name}: {name: string}) {
    return this.boilerPartsService.findOneByName(name);
  }



}
