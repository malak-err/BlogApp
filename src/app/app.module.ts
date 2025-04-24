import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PosteListComponent } from './poste-list/poste-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostFormComponent } from './post-form/post-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './post-list/add/add.component';
import { ClistComponent } from './post-list/list/clist/clist.component';
import { ModifierComponent } from './post-list/list/modifier/modifier.component';
import { SuprimerComponent } from './post-list/suprimer/suprimer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PosteListComponent,
    PostDetailComponent,
    PostFormComponent,
    NavbarComponent,
    AddComponent,
    ClistComponent,
    ModifierComponent,
    SuprimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
