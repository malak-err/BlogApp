import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-clist',
  templateUrl: './clist.component.html',
  styleUrls: ['./clist.component.css']
})
export class ClistComponent implements OnInit {
  article: any;

  constructor(private postService: PostServiceService,
    private route: ActivatedRoute,
    private router: Router){

  }
  ngOnInit(): void{
  this.read();      
    }
  read(){
    this.postService.getArticle().subscribe(res=>{
      this.article=res;
    })
  }
  
  
  }
 
