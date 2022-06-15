import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../../shared/interfaces/product';
import { AngularFirestore } from '@angular/fire/compat/firestore/';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient, private db: AngularFirestore) { }

  loadProducts() {
    //  return this.http.get<IProduct[]>('http://localhost:3000/products');
    return this.db.collection('products').valueChanges({ idField: '_id' }) as Observable<IProduct[]>;
  }

  loadOneProduct(id: string) {
    //  return this.http.get<IProduct>(`http://localhost:3000/products/${id}`);
    return this.db.doc<IProduct>(`products/${id}`).valueChanges({ idField: '_id' });
  }

  loadRecentProducts(limit: number) {
    let query = limit //? `?limit=${limit}` : '';
    //  return this.http.get<IProduct[]>(`http://localhost:3000/products${query}`);
    return this.db.collection('products', ref => ref.limit(limit)).valueChanges({ idField: '_id' }) as Observable<IProduct[]>;
  }

  loadUserProducts() {
    return this.http.get<IProduct[]>(`http://localhost:3000/user/products`, { withCredentials: true });
  }

  createProduct(data: { productName: string; description: string; price: number; image: string; quantity: number; category: string }) {
    //  return this.http.post<IProduct>('http://localhost:3000/products', data, { withCredentials: true });
    return this.db.collection('products').add(data);

  }

  removeProduct(id: string) {
    //  return this.http.delete(`http://localhost:3000/delete/${id}`, { withCredentials: true });
    return this.db.collection('products').doc(id).delete();
  }

  editProduct(id: string, data: { productName: string; description: string; price: number; image: string; quantity: number; category: string }) {
    //  return this.http.put<IProduct>(`http://localhost:3000/edit/${id}`, data, { withCredentials: true });
    return this.db.collection('products').doc(id).update(data);
  }

  orderProduct(id: string, data: { quantity: number }) {
    return this.http.put(`http://localhost:3000/order/${id}`, data, { withCredentials: true });
  }
}
