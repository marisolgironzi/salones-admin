import { Component, ViewChild } from '@angular/core';
import { Usuario } from '../../../interfaces/usuarios';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UsuarioService } from '../../../services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  listUsuarios: Usuario[] = [];  
    
    displayedColumns: string[] = ['id_usuario', 'nombre_usuario', 'apellido_usuario', 'usuario_usuario', 'idCategoria_usuario', 'acciones'];
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
}
