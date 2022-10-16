import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {
  searchValue: string = '';

  constructor() { }

  public getFilter(): string {
    return this.searchValue;
  }

  public setFilter(filter: string): void {
    this.searchValue = filter;
  }
}
