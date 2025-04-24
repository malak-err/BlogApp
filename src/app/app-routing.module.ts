import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PosteListComponent } from './poste-list/poste-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostFormComponent } from './post-form/post-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'post-list', component: PosteListComponent},
  { path: 'post-detail', component: PostDetailComponent},
  { path: 'post-form', component: PostFormComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
