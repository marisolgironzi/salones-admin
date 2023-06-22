import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';

//Componentes
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ListarUsuariosComponent } from './components/moduloUsuarios/listar-usuarios/listar-usuarios.component';
import { AgregarUsuarioComponent } from './components/moduloUsuarios/agregar-usuario/agregar-usuario.component';
import { ModificarUsuarioComponent } from './components/moduloUsuarios/modificar-usuario/modificar-usuario.component';
import { ModificarSalonComponent } from './components/moduloSalones/modificar-salon/modificar-salon.component';
import { AgregarSalonComponent } from './components/moduloSalones/agregar-salon/agregar-salon.component';
import { ListarSalonesComponent } from './components/moduloSalones/listar-salones/listar-salones.component';
import { ListarReservasComponent } from './components/moduloReservas/listar-reservas/listar-reservas.component';
import { AgregarReservaComponent } from './components/moduloReservas/agregar-reserva/agregar-reserva.component';
import { ModificarReservaComponent } from './components/moduloReservas/modificar-reserva/modificar-reserva.component';
import { AgregarClienteComponent } from './components/moduloClientes/agregar-cliente/agregar-cliente.component';
import { ModificarClienteComponent } from './components/moduloClientes/modificar-cliente/modificar-cliente.component';
import { ListarClientesComponent } from './components/moduloClientes/listar-clientes/listar-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ListarUsuariosComponent,
    AgregarUsuarioComponent,
    ModificarUsuarioComponent,
    ModificarSalonComponent,
    AgregarSalonComponent,
    ListarSalonesComponent,
    ListarReservasComponent,
    AgregarReservaComponent,
    ModificarReservaComponent,
    AgregarClienteComponent,
    ModificarClienteComponent,
    ListarClientesComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
