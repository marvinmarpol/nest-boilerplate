import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDTO } from './cat.create.dto';

@Controller('cat')
export class CatController {
  @Post()
  @Header('Cache-Control', 'no-store')
  @HttpCode(204)
  create(@Body() createDTO: CreateCatDTO): string {
    return 'create a cat';
  }

  @Get()
  findAll(@Req() request: Request): string {
    return 'all cats';
  }

  @Get('/q')
  async findAllWQuery(
    @Query('age') age: number,
    @Query('breed') breed: string,
  ) {
    return `This action returns all cats filtered by age: ${age} and breed: ${breed}`;
  }

  @Get(':id')
  findOne(@Param('id') id: number): string {
    return `This action returns a #${id} cat`;
  }

  @Get('/abcd/*')
  @Redirect('https://nestjs.com', 301)
  findWildCat(): string {
    return 'This uses a wildcard';
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
}
