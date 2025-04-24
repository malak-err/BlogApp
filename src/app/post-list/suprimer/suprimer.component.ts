import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { PostServiceService } from 'src/app/services/post-service.service';
@Component({
  selector: 'app-suprimer',
  templateUrl: './suprimer.component.html',
  styleUrls: ['./suprimer.component.css']
})
export class SuprimerComponent  implements OnInit {
   id!:number;
  constructor(private postService: PostServiceService,
      private route: ActivatedRoute,private router: Router,){
  
    }
  ngOnInit(): void{
this.delete()
  }
  delete(){
    this.postService.deleteArticle(this.id ).subscribe(response=>{
      this.router.navigate(['/post-list/list/clist'])
    })}
}
