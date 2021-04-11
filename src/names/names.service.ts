import { Injectable } from '@nestjs/common';
import { Name } from './interfaces/new.interface';

@Injectable()
export class NamesService {
    private readonly names: Name[] = []

    async create(name: Name) {
        this.names.push(name); 
    }

    async findAll(): Promise<Name[]> {
        return this.names;
    }

}
