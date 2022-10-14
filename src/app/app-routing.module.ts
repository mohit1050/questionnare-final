import { ResultComponent } from './components/result/result.component';
import { QuestionformComponent } from './components/questionform/questionform.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListuserComponent } from './components/listuser/listuser.component';
import { RegisteruserComponent } from './components/registeruser/registeruser.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'getUsers', component: ListuserComponent },
  { path: 'register', component: RegisteruserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'questionform', component: QuestionformComponent },
  { path: 'result', component: ResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
