import { Product } from '../interfaces/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() products!: Product;
  @Input() showImage!: boolean;

  constructor() {}
  ngOnInit() {}
}
