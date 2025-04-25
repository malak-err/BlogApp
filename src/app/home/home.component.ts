import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { PostServiceService } from '../services/post-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles:Article[]=[];
  constructor(private postService:PostServiceService,
    private router:Router
  ){}
 ngOnInit(): void {
  this.getArticles();
   
 }
 getArticles(){
  this.postService.getArticle().subscribe(res=>{
    this.articles=res;
  })
 }


}
