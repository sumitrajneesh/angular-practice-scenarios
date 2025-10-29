import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  products = [
    { id: 101, name: 'Laptop' },
    { id: 102, name: 'Smartphone' },
    { id: 103, name: 'Headphones' }
  ];
}
