import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListarUsuariosComponent } from './components/dashboard/moduloUsuarios/listar-usuarios/listar-usuarios.component';
import { AgregarUsuarioComponent } from './components/dashboard/moduloUsuarios/agregar-usuario/agregar-usuario.component';
import { ModificarUsuarioComponent } from './components/dashboard/moduloUsuarios/modificar-usuario/modificar-usuario.component';
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'login'},
  {path: 'login', component: LoginComponent, pathMatch: 'full'},

  {path: 'dashboard', component:DashboardComponent, pathMatch: 'full'},

  {path: 'listarUsuarios', component: ListarUsuariosComponent},
  {path: 'agregarUsuario', component: AgregarUsuarioComponent},
  {path: 'modificarUsuario', component: ModificarUsuarioComponent},
  
  /* {path: 'listarSalones', component:},
  {path: 'agregarSalon', component: },
  {path: 'modificarSalon', component: },
  
  {path: 'listarClientes', component: },
  {path: 'agregarCliente', component: },
  {path: 'modificarCliente', component: },
  
  {path: 'listarReservas', component: },
  {path: 'agregarReserva', component: },
  {path: 'modificarReserva', component: }
  */ 
  {path: '**', redirectTo: 'dashboard', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
