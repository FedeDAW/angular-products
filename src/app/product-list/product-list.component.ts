import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  showImage = true;
  filterSearch=""; // podreiamos poner un valor por defecto
  title = 'Mi lista de productos';
  headers = {description: 'Producto', price: 'Precio', available: 'Disponible', imageUrl:'Imagen'};

  products: Product[] = [{
    id: 1,
    description: 'SSD hard drive',
    available: '2016-10-03',
    price: 75,
    imageUrl: 'assets/img/Aldeano3.png',
    rating: 5
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
    }
  ];

  constructor() { }

  ngOnInit(): void {
    console.log("ProductList a Iniciado!");
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

}
