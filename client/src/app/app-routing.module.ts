import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import { ErrorComponent } from './error/error.component';
import {ActivatedRoute} from '@angular/router';

const routes: Routes = [
  { path: 'edit/:id', component: EditComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'new', component: NewComponent },
  { path: 'home', component: HomeComponent },
  { path: 'error', component: ErrorComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },

];

@NgModule({
  // declarations: [HomeComponent, NewComponent, EditComponent, ErrorComponent],
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
