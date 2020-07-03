import { Injectable } from '@angular/core';
import {User} from '../models/User';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }
  users(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
  postOfSingleUser(id):Observable<Post[]>{
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  }
}
