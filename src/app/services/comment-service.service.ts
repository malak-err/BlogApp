import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commentaire } from '../models/commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {
           private apiUrl="http://localhost:3000/commentaires";
  constructor( private http:HttpClient) { }
  getComment():Observable<Commentaire[]>{
    return this.http.get<Commentaire[]>(this.apiUrl);
  }
}
