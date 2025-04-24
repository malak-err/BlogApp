import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { PostServiceService } from 'src/app/services/post-service.service';
@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {

   article!:Article;
   id!:number;
  constructor(private postService: PostServiceService,
      private route: ActivatedRoute,private router: Router,){
  
    }
  ngOnInit(): void{
    this.update();
  }
 update(){
  this.postService.updateArticle(this.id ,this.article).subscribe(response=>{
    this.router.navigate(['/post-list/list/clist'])
  })}

}

