import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import path from 'path';
import { NamesController } from './new.controller';
import { NamesService } from './names.service';

@Module({
  imports: [
  ],
  controllers: [NamesController],
  providers: [NamesService],
})
export class NamesModule {}
