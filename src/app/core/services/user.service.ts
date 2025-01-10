import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel, UserModel } from '../models/model-class';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  api_url = 'https://localhost:44316/api/User/';
  constructor(private http: HttpClient) {}

  login(loginData: LoginModel) {
    return this.http.post(this.api_url + 'login', loginData);
  }

  getAllUsers() {
    return this.http.get(this.api_url);
  }

  getUserById(id: number) {
    return this.http.get(this.api_url + id);
  }

  createUser(user: UserModel) {
    return this.http.post(this.api_url, user);
  }

  updateUser(userId: number, user: UserModel) {
    return this.http.put(this.api_url + userId, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.api_url + id);
  }
}
