import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PosteListComponent } from './poste-list/poste-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostFormComponent } from './post-form/post-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PosteListComponent,
    PostDetailComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
