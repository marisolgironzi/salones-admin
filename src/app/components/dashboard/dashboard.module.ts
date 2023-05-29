import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SalonesComponent } from './salones/salones.component';
import { EventosComponent } from './eventos/eventos.component';
import { AdicionalesComponent } from './adicionales/adicionales.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ReservasComponent } from './reservas/reservas.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    UsuariosComponent,
    SalonesComponent,
    EventosComponent,
    AdicionalesComponent,
    ClientesComponent,
    ReservasComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  exports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
