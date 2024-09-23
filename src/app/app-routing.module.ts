import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookLstComponent } from './book-lst/book-lst.component';

const routes: Routes = [
  {path:"",component:BookLstComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
