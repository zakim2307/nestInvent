// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { CreateInventoryDto } from './dto/create-inventory.dto';
// import { inventory } from './entities/inventory.entity';

// @Injectable()
// export class InventoryService {
  
//   constructor(@InjectRepository(inventory) private readonly inventoryRepository: Repository<inventory>) {}

//   create(createInventoryDto: CreateInventoryDto) {
//     return this.inventoryRepository.save(createInventoryDto);
//   }

//   findAll() {
//     return this.inventoryRepository.find();
//   }

//   findOne(id: number) {
//     return this.inventoryRepository.findOne(id);
//   }

//   update(id: number, updateInventoryDto: CreateInventoryDto) {
//     return this.inventoryRepository.update(id, updateInventoryDto);
//   }

//   remove(id: number) {
//     return this.inventoryRepository.delete(id);
//   }
// }
// function InjectModel(arg0: string) {
//   throw new Error('Function not implemented.');
// }

