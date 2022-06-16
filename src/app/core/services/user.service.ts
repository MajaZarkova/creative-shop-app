import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IUser } from '../../shared/interfaces/user';
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: any | null | undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient, private auth: AngularFireAuth) { }

  register(data: {
    firstName: string; lastName: string; email: string;
    password: string; rePassword: string
  }) {  
    this.user = undefined;
    //  return this.http.post<IUser>('http://localhost:3000/register', data, { withCredentials: true }).pipe(
    //    tap(user => this.user = user)
    return this.auth.createUserWithEmailAndPassword(data.email, data.password).then(res => {
      this.auth.signInWithEmailAndPassword(data.email, data.password);
    })
  }

  login(data: { email: string; password: string }) {
    this.user = undefined;
    // return this.http.post<IUser>('http://localhost:3000/login', data, { withCredentials: true }).pipe(
    //   tap(user => this.user = user)
    // )

    return this.auth.signInWithEmailAndPassword(data.email, data.password);
  }

  getUserProfile() {
    // return this.http.get<IUser | null>('http://localhost:3000/user/profile', { withCredentials: true }).pipe(
    //   tap(user => this.user = user)
    // )

    return this.auth.credential.pipe(
      tap(user => this.user = user)
    )
  }

  logout() {
    // return this.http.post('http://localhost:3000/logout', {}, { withCredentials: true }).pipe(
    //   tap(user => this.user = null)
    // )

    return this.auth.signOut();
  }
}
