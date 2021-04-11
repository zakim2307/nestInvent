import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateNewDTO } from './dto/create-new.dto';
import { NamesService } from './names.service';
import { Name } from './interfaces/new.interface';

@Controller('names')
export class NamesController {
    constructor(private namesService: NamesService) {}
  @Post('post')
  async create(@Body() createNewDto: CreateNewDTO) {
    await this.namesService.create(createNewDto);
  }

  @Get()
  async findAll(): Promise<Name[]> {
    return this.namesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: CreateNewDTO) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}