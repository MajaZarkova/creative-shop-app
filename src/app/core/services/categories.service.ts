import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ICategory } from '../../shared/interfaces/category'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private db: AngularFirestore) { }

  loadCategories() {
    return this.db.collection('categories').valueChanges({ idField: '_id' }) as Observable<ICategory[]>
  }
}
