import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
 private apiurl="http://localhost:3000/articles";
  constructor(private http:HttpClient) { }
  getArticle():Observable<Article[]>{

    return this.http.get<Article[]>(this.apiurl );
  }
  saveArticle(article:Article):Observable<Article>{
    return this.http.post<Article>(this.apiurl,article);

  }
  updateArticle(id:number ,article:Article): Observable<Article>{
    return this.http.put<Article>(`${this.apiurl}/${id}`, article)
  }
  deleteArticle(id:number):Observable<Article>{
    return this.http.delete<Article>(`${this.apiurl}/${id}`)
  }

}
