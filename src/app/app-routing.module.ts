import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { LoginComponent } from './components/login/login.component';
import { ListarUsuariosComponent } from './components/moduloUsuarios/listar-usuarios/listar-usuarios.component';
import { AgregarUsuarioComponent } from './components/moduloUsuarios/agregar-usuario/agregar-usuario.component';
import { ModificarUsuarioComponent } from './components/moduloUsuarios/modificar-usuario/modificar-usuario.component';
import { ListarSalonesComponent } from './components/moduloSalones/listar-salones/listar-salones.component';
import { AgregarSalonComponent } from './components/moduloSalones/agregar-salon/agregar-salon.component';
import { ModificarSalonComponent } from './components/moduloSalones/modificar-salon/modificar-salon.component';
import { ListarClientesComponent } from './components/moduloClientes/listar-clientes/listar-clientes.component';
import { AgregarClienteComponent } from './components/moduloClientes/agregar-cliente/agregar-cliente.component';
import { ModificarClienteComponent } from './components/moduloClientes/modificar-cliente/modificar-cliente.component';
import { ListarReservasComponent } from './components/moduloReservas/listar-reservas/listar-reservas.component';
import { AgregarReservaComponent } from './components/moduloReservas/agregar-reserva/agregar-reserva.component';
import { ModificarReservaComponent } from './components/moduloReservas/modificar-reserva/modificar-reserva.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'login'},
  {path: 'login', component: LoginComponent},

  {path: 'listarUsuarios', component: ListarUsuariosComponent},
  {path: 'agregarUsuario', component: AgregarUsuarioComponent},
  {path: 'modificarUsuario', component: ModificarUsuarioComponent},
  
  {path: 'listarSalones', component: ListarSalonesComponent},
  {path: 'agregarSalon', component: AgregarSalonComponent},
  {path: 'modificarSalon', component: ModificarSalonComponent},
  
  {path: 'listarClientes', component: ListarClientesComponent},
  {path: 'agregarCliente', component: AgregarClienteComponent},
  {path: 'modificarCliente', component: ModificarClienteComponent},
  
  {path: 'listarReservas', component: ListarReservasComponent},
  {path: 'agregarReserva', component: AgregarReservaComponent},
  {path: 'modificarReserva', component: ModificarReservaComponent},

  {path: '**', redirectTo: 'dashboard', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
