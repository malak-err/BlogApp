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
      motDePasse : ['', Validators.required] 
      })
  }
 
  isLoading = false;

  login() {
    this.isLoading = true;
    this.http.get<any>("http://localhost:3000/utilisateurs")
      .subscribe(
        res => {
          const user = res.find((a: any) => {
            return a.email === this.loginForm.value.email &&
                   a.motDePasse === this.loginForm.value.motDePasse;
          });
  
          if (user) {
            alert('Connexion réussie');
            this.loginForm.reset();
            this.router.navigate(["home"]);
          } else {
            alert("Utilisateur non trouvé");
          }
          this.isLoading = false;
        },
        err => {
          alert("Une erreur s'est produite. Vérifiez si le serveur est en cours d'exécution.");
          this.isLoading = false;
        }
      );
  }
}
