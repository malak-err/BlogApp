import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service'; // Importer le service

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public isLoading = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthserviceService 
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], 
      motDePasse: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.invalid) {
      alert('Veuillez remplir tous les champs correctement.');
      return;
    }

    this.isLoading = true;
    this.http.get<any>("http://localhost:3000/utilisateurs")
      .subscribe(
        res => {
          const user = res.find((a: any) => {
            return a.email === this.loginForm.value.email &&
                   a.motDePasse === this.loginForm.value.motDePasse;
          });

          if (user) {
            this.authService.login(this.loginForm.value.email, this.loginForm.value.motDePasse); // Mettre à jour l'état
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