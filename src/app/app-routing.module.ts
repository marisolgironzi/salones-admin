import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { SalonesComponent } from './components/salones/salones.component';
import { UsuarioService } from './services/usuario.service';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'login'},
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, pathMatch:'full'},
  {path: 'clientes', component: ClientesComponent},
  {path: 'reservas', component: ReservasComponent},
  {path: 'salones', component: SalonesComponent},
  {path: 'usuarios', component: UsuarioService},
  {path: '**', redirectTo: 'login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
