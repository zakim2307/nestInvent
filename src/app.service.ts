import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hellrrrrrrrrro World!';
  }

  getShallow() : string {
    return 'hola amigo';
  }

  getShallow1(id,name) : string {
    return ('hola amigo'+id+name);
  }
}
