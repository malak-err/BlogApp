import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-clist',
  templateUrl: './clist.component.html',
  styleUrls: ['./clist.component.css']
})
export class ClistComponent implements OnInit {

  constructor(private postService: PostServiceService,
    private route: ActivatedRoute,){

  }
  ngOnInit(): void{
    this.postService.getArticle.subscribe((data: any) => {
      
      
    });
  }

}
