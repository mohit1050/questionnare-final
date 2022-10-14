import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserResponse } from './UserResponse';

@Injectable({
  providedIn: 'root',
})
export class UserresponseService {
  userres: UserResponse[] = [];
  marks: any = 0;

  constructor(private http: HttpClient) {}
  baseurl = 'http://127.0.0.1:8088';
  addRes(data: any) {
    this.userres.push(data);
  }

  getRes() {
    return this.userres;
  }

  submitRes() {
    this.http
      .post<UserResponse>(this.baseurl + '/submit', this.getRes())
      .subscribe((data) => {
        console.log('sucessfully added');
        //console.log(data)
        //this.marks=data
      });
  }

  /**getScore(){
  this.http.get<number>(this.baseurl + "/getScore")
   // return data;
  }**/
}
