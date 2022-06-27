import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://sheet.best/api/sheets/46a7ac0d-1ee7-42dd-8b86-a6d5c573b09f'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpCliente: HttpClient
  ) { }

    getUsers(): Observable<User[]> {
      return this.httpCliente.get<User[]>(this.apiUrl)
    }

    postUser(user: User): Observable<User>{
      return this.httpCliente.post<User>(this.apiUrl, user, this.httpOptions)
    }

    deleteUser(id: number): Observable<User>{
      return this.httpCliente.delete<User>(`${this.apiUrl}/id/${id}`)
    }

    updateUser(id: number, user: User): Observable<User>{
      return this.httpCliente.put<User>(`${this.apiUrl}/id/${id}`, user, this.httpOptions)
    }

    getUser(id: number): Observable<User[]>{
      return this.httpCliente.get<User[]>(`${this.apiUrl}/id/${id}`)
    }
}
