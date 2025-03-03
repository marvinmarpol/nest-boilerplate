import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCatDTO } from './cat.create.dto';
import { CatService } from './cat.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cat')
export class CatController {
  constructor(private catsService: CatService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDTO) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
