import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../shared/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient ) { }

  loadProducts() {
    return this.http.get<IProduct[]>('http://localhost:3000/products');
  }

  loadOneProduct(id: string) {
    return this.http.get<IProduct>(`http://localhost:3000/products/${id}`);
  }

  loadRecentProducts(limit?:number) {
    let query = limit ? `?limit=${limit}` : '';
    return this.http.get<IProduct[]>(`http://localhost:3000/products${query}`);
  }
}
