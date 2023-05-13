import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},

  {path: 'dashboard', loadChildren: () => import(
    './components/dashboard/dashboard.module')
    .then(x => x.DashboardModule)},
  
  {path: '**', redirectTo: 'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
