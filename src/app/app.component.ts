import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IProduct } from './models/product';
import { ProductsService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'first-ng-app';

  products$: Observable<IProduct[]>;
  // products: IProduct[] = [];
  loading = false;
  constructor(private productsService: ProductsService) { }
  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.productsService
      .getAll()
      .pipe(tap(() => (this.loading = false)));
    // this.productsService.getAll().subscribe((products) => {
    //   this.products = products;
    //   this.loading = false;
    // });
  }
}
