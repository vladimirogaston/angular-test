import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersUri = 'http://localhost:5000/api/v0/users';

  constructor(private http: HttpClient) {}

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUri);
  }

  public deleteById(id: number): Observable<number> {
    return this.http.delete<number>(this.usersUri+'/'+id);
  }
}
