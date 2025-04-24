import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
 private apiurl="http://localhost:3000/";
  constructor(private http:HttpClient) { }
  getArticle():Observable<Article[]>{
    return this.http.get<Article[]>(this.apiurl + 'articles');
  }
}
