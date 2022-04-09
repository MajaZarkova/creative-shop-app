import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IUser } from '../../shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: IUser | null | undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) { }

  register(data: {
    firstName: string; lastName: string; email: string;
    password: string; rePassword: string
  }): Observable<IUser> {
    this.user = undefined;
    return this.http.post<IUser>('http://localhost:3000/register', data, { withCredentials: true }).pipe(
      tap(user => this.user = user)
    )
  }

  login(data: { email: string; password: string }): Observable<IUser> {
    this.user = undefined;
    return this.http.post<IUser>('http://localhost:3000/login', data, { withCredentials: true }).pipe(
      tap(user => this.user = user)
    )
  }

  getUserProfile() {
    return this.http.get<IUser | null>('http://localhost:3000/user/profile', { withCredentials: true }).pipe(
      tap(user => this.user = user)
    )
  }

  logout() {
    return this.http.post('http://localhost:3000/logout', {}, { withCredentials: true }).pipe(
      tap(user => this.user = null)
    )
  }
}
