import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello From Malindu Upendra, Testing Docker & Kubernetes';
    return 'Hello, I am Malindu Upendra. Testing Docker & Kubernetes';
  }

  getArray(){

    let arr = [{
      'maths':'A',
      'Sinhala':'B',
      'Science':'C'
    },
    {
      'maths':'C',
      'Sinhala':'A',
      'Science':'B'
    }];
    
    return arr;
  }
}
