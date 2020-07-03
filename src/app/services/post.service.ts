import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/Post';
import {PostComment} from '../models/PostComment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  post(): Observable<Post[]>{
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
  commentsOfSinglePost(id): Observable<PostComment[]>{
    return this.http.get<PostComment[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  }
}

