import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './orgin/components/home/home.component';
import { AddDetailsComponent } from './orgin/components/add-details/add-details.component';
import { StudentListComponent } from './orgin/components/student-list/student-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'add-list', component: AddDetailsComponent },
  { path: 'add-list/:id', component: AddDetailsComponent },
  { path: 'view-list', component: StudentListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
