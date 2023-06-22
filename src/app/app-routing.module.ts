import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { LoginComponent } from './components/login/login.component';
import { ListarUsuariosComponent } from './components/moduloUsuarios/listar-usuarios/listar-usuarios.component';
import { AgregarUsuarioComponent } from './components/moduloUsuarios/agregar-usuario/agregar-usuario.component';
import { ModificarUsuarioComponent } from './components/moduloUsuarios/modificar-usuario/modificar-usuario.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'login'},
  {path: 'login', component: LoginComponent},

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
