import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
    {path:'', component: InicioComponent},
    {path: 'navbar', component: NavbarComponent},
    {path:'usuarios', component: UsuariosComponent},
    {path:'reportes', component: ReportesComponent},
    {path:'crear-usuario', component: CrearUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
