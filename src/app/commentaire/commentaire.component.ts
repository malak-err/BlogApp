import { Component, Input, OnInit } from '@angular/core';
import { CommentServiceService } from '../services/comment-service.service';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {
  @Input () CurrentarticleId!:string;
  constructor(private commentaireservice:CommentServiceService ){}
  ngOnInit(): void {
    this.commentaireservice.getComment().subscribe((comment)=>{
     
      console.log( 'comment',comment)
    })
    
  }

}
