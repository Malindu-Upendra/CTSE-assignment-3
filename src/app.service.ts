import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

let cart = [
  {
    user: 1,
    products: [1, 2, 3, 4, 5],
  },
  {
    user: 2,
    products: [4, 5, 6],
  },
  {
    user: 3,
    products: [1, 3, 5, 7, 9],
  },
  {
    user: 4,
    products: [10, 9, 8, 7],
  },
];

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}


  async getHello() {
    return "Microservice Upendra Y.A.M"
    //console.log(obj)
  }

  async getProductstothePayment() {
    let items = [];
    
    await this.httpService
      .get('http://34.121.43.145:3000/products')
      .subscribe(async (result) => console.log(this.getProducts(result.data)));

    console.log(items);
    return items;
  }

  async getProducts(products: any[]){
    const user = 1;
    const cartItems = cart.find((item) => item.user === user);
    let finalCartItems = [];

    await products.map((item) => {
      cartItems.products.map((cartI) => {
        if (item.id === cartI) {
          finalCartItems.push(item);
        }
      });
    });
    
    return finalCartItems;
  }

}
