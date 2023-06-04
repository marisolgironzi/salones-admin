import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'login'},
  {path: 'login', component: LoginComponent, pathMatch: 'full'},

  
  {path: '**', redirectTo: 'login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
