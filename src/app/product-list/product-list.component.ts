import { Component, OnInit, Output } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Output() showImage = true;
  filterSearch = ''; // podreiamos poner un valor por defecto
  title = 'Mi lista de productos';
  headers = {
    description: 'Producto',
    price: 'Precio',
    available: 'Disponible',
    imageUrl: 'Imagen',
    rating: 'Puntuación',
  };

  @Output() products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
