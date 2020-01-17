import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {PersonAddComponent} from "./person-add/person-add.component";
import { InfoComponent } from './info/info.component';


const routes: Routes = [
  {path: '', component: InfoComponent},
  {path: 'note', component: MainComponent},
  {path: 'add', component: PersonAddComponent},
  {path: 'edit/:id', component: PersonAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
