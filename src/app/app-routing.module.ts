import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {RandomDogComponent} from './random-dog/random-dog.component';
import {MainComponent} from './main/main.component';
import {NotFoundComponent} from './not-found/not-found.component';


const routes: Routes = [
 // {path: '**', component: Not}
  {path: 'about', component: AboutComponent},
  {path: 'random-dog', component: RandomDogComponent},
  {path: 'random-dog/:name', component: RandomDogComponent},
  {path: '**', component: NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
