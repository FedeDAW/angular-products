import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Product[]{
    return[{
      id: 1,
      description: 'SSD hard drive',
      available: '2016-10-03',
      price: 75,
      imageUrl: 'assets/img/Aldeano3.png',
      rating: 4
      },{
      id: 2,
      description: 'LGA1151 Motherboard',
      available: '2016-09-15',
      price: 96.95,
      imageUrl: 'assets/img/charFamily.jpg',
      rating: 4
      },{
        id: 3,
        description: 'Patata Gaming',
        available: '2021-10-1',
        price: 3.95,
        imageUrl: 'assets/img/Fondo pokmon.png',
        rating: 2
      }];
  }
}
