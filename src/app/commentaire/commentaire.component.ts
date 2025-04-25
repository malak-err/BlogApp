import { Component, Input, OnInit } from '@angular/core';
import { CommentServiceService } from '../services/comment-service.service';
import { Commentaire } from '../models/commentaire';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {
  @Input () CurrentarticleId!:string;
  comments:Commentaire[]=[]
  constructor(private commentaireservice:CommentServiceService ){}
  ngOnInit(): void {
    this.commentaireservice.getComment().subscribe((comments)=>{
     
      console.log( 'comment',comments)
      this.comments=comments;
    })
    
  }

}
