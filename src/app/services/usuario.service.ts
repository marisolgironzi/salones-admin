import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listUsuarios: Usuario[] = [
    {idUsuario: 1, nombre: "Marisol", apellido: "Gironzi", usuario: "gironziadmin", idCategoria: 1}
  ];
  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index:number){
    this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario:Usuario){
    this.listUsuarios.unshift(usuario);
  }
}
