import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registration } from '../models/registration.model';

const baseUrl='http://localhost:8088/user'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  getAllUsers():Observable<Registration[]>{
    return this.http.get<Registration[]>(baseUrl+"/getUsers");
  }

  saveUser(data:any):Observable<any>
  {
    return this.http.post(baseUrl+"/addUser",data);
  }

  loginUser(data:any):Observable<any>
  {
    return this.http.post(baseUrl+"/login",data);
  }
}
