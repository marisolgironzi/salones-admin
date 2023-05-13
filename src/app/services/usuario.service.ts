import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listUsuarios: Usuario[] = [
    {usuario: "admin", nombre: "Marisol", apellido: "Gironzi", sexo: "Femenino"}
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
