import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../shared/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  loadProducts() {
    return this.http.get<IProduct[]>('http://localhost:3000/products');
  }

  loadOneProduct(id: string) {
    return this.http.get<IProduct>(`http://localhost:3000/products/${id}`);
  }

  loadRecentProducts(limit?: number) {
    let query = limit ? `?limit=${limit}` : '';
    return this.http.get<IProduct[]>(`http://localhost:3000/products${query}`);
  }

  loadUserProducts(userId: string) {
    return this.http.get<IProduct[]>(`http://localhost:3000/user/products/${userId}`, { withCredentials: true });
  }

  createProduct(data: { productName: string; description: string; price: number; image: string; quantity: number; category: string }) {
    return this.http.post<IProduct>('http://localhost:3000/products', data, { withCredentials: true });
  }

  removeProduct(id: string) {
    return this.http.delete(`http://localhost:3000/delete/${id}`, { withCredentials: true });
  }

  editProduct(id: string, data: { productName: string; description: string; price: number; image: string; quantity: number; category: string }) {
    return this.http.put<IProduct>(`http://localhost:3000/edit/${id}`, data, { withCredentials: true });
  }

  orderProduct(id: string, userId: string, data: { quantity: number }) {
    return this.http.put(`http://localhost:3000/order/${id}/${userId}`, data, { withCredentials: true });
  }
}
