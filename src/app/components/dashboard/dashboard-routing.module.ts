import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CrearUsuarioComponent } from "./crear-usuario/crear-usuario.component";
import { ReportesComponent } from './reportes/reportes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SalonesComponent } from './salones/salones.component';
import { EventosComponent } from './eventos/eventos.component';
import { AdicionalesComponent } from './adicionales/adicionales.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ReservasComponent } from './reservas/reservas.component';

export const routes: Routes = [
    {path:'', component: InicioComponent},
    {path: 'navbar', component: NavbarComponent},
    {path:'usuarios', component: UsuariosComponent},
    {path:'crear-usuario', component: CrearUsuarioComponent},
    {path:'reportes', component: ReportesComponent},
    {path:'salones', component: SalonesComponent},
    {path:'eventos', component: EventosComponent},
    {path:'adicionales', component: AdicionalesComponent},
    {path:'clientes', component: ClientesComponent},
    {path:'reservas', component: ReservasComponent},
    {path:'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
