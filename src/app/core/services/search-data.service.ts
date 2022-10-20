import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {
  searchValue: string = '';
  categoryFilter: string = '';

  constructor() { }

  public getFilter(): string {
    return this.searchValue;
  }

  public setFilter(filter: string): void {
    this.searchValue = filter;
  }

  public getCategoryFilter(): string {
    return this.categoryFilter;
  }

  public setCategoryFilter(filter: string): void {
    this.categoryFilter = filter;
  }
}
