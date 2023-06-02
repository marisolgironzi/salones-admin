import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuarios';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  //TABLA USUARIOS
    listUsuarios: Usuario[] = [];  
    
    displayedColumns: string[] = ['idUsuario', 'nombre', 'apellido', 'usuario', 'idCategoria', 'acciones'];
    dataSource! : MatTableDataSource<any>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    @ViewChild(MatSort) sort!: MatSort;

    constructor (private _usuarioService:UsuarioService, private _snackBar:MatSnackBar, private router:Router)  {}

    ngOnInit(): void {
      this.cargarUsuario();
    }

    cargarUsuario(){
      this.listUsuarios=this._usuarioService.getUsuario();
      this.dataSource=new MatTableDataSource(this.listUsuarios);
    }

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    eliminarUsuario(index:number){
      this._usuarioService.eliminarUsuario(index);
      this.cargarUsuario();
      this._snackBar.open('El usuario fue eliminado con éxito', '', {
        duration:1500,
        horizontalPosition:'center',
        verticalPosition:'bottom'
      })
    }

  //TABLA SALONES
}
