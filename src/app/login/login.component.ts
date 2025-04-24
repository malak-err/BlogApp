import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup
  constructor(private http:HttpClient,
    private router:Router,
   private formBuilder: FormBuilder
  ){}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({ 
      email : [''], 
      motpasse : ['', Validators.required] 
      })
  }
 
  login(){ 
    this.http.get<any>("http://localhost:3000/utilisateurs")
    .subscribe(res => {
      const user = res.find((a: any) => {
        return a.email === this.loginForm.value.email &&
               a.password === this.loginForm.value.motpasse;
      });
  
    if(user){ 
    alert('Connexion réussie'); 
    this.loginForm.reset() 
    this.router.navigate(["/home"]) 
    }else{ 
    alert("utilisateur non trouvé") 
    } 
    },err=>{ 
    alert("Quelque chose s'est passé faux") 
    }) 
    } 
}
