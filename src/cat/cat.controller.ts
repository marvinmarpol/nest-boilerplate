import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cat')
export class CatController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'all cats';
  }
}
