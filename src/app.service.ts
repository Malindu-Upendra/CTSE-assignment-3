import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Testing changes on CI/CD pipeline';
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
