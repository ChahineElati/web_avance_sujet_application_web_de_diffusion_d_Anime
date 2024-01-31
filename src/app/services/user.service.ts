import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(name: string, email: string, pw: string): Observable<any> {
    return this.http.post("http://localhost:5000/user",
      {
        name: name,
        email: email,
        password: pw
      },
      {
        headers: {
          contentType: "application/json"
        }
      });
  }

  findUser(email: string): Observable<any> {
    return this.http.get("http://localhost:5000/user/" + email);
  }

}
