import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { PostServiceService } from 'src/app/services/post-service.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit  {

  article:any;
constructor(private postService: PostServiceService,
    private route: ActivatedRoute,private router: Router){

  }



  ngOnInit(): void{
   this.article = new Article();

  }
  add(){
  this.postService.saveArticle(this.article).subscribe(response=>{
    this.router.navigate(['/post-list/list/clist'])
  })
}

}



