import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ClistComponent } from './post-list/list/clist/clist.component';
import { ModifierComponent } from './post-list/modifier/modifier.component';
import { AddComponent } from './post-list/add/add.component';
import { SuprimerComponent } from './post-list/suprimer/suprimer.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'post-detail', component: PostDetailComponent},
  { path: 'post-list', component: ClistComponent},
  { path: 'modifier', component: ModifierComponent},
  { path: 'add', component: AddComponent},
  { path: 'suprimer', component: SuprimerComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
