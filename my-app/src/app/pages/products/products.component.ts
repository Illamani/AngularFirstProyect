import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { tap } from "rxjs/operators";
import { Product } from "./interfaces/product.interface"
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.services';

@Component({
  selector: 'app-products',
  template: `
  <section class="products">
  <app-product 
  (addToCartClick)="addToCart($event)"
  [product]="product" 
  *ngFor="let product of products"></app-product>
  </section>
  `,
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products!: Product[];

  constructor(private productSvc: ProductsService, private shoppingCartSvc : ShoppingCartService) { }

  ngOnInit(): void {
    this.productSvc.getProducts()
    .pipe(
      // tap(res => console.log(res))
      tap((products: Product[]) => this.products = products)
    )
    .subscribe()
  }

  addToCart(product:Product):void{
    console.log("Add to cart",product)
    this.shoppingCartSvc.updateCart(product)
  }

}