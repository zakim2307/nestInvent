import { Body, Controller, Get, Param, Post, Query, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateNewDTO } from './names/dto/create-new.dto';

@Controller('invite')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('se/:id:name')
  getShallow(@Param() params): string {
    return this.appService.getShallow1(params.id,params.name);
  }

  @Get('se2')
  getShallow2(): string {
    return this.appService.getShallow();
  }

  @Get('post')
  async create(@Body() createNewDTO:CreateNewDTO){
    return 'Hello there'+createNewDTO;
  }
}
