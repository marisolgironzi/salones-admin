import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  API: string='https://github.com/marisolgironzi/salones-api';

  constructor(
    private conexionservicio:HttpClient
  ) {}

  listarUsuarios(){
    return this.conexionservicio.get(this.API+"?listarUsuarios=");
  }

  agregarUsuario(datosUsuario:Usuario):Observable<any>{
    return this.conexionservicio.put(this.API+"?insertarUsuario=1",datosUsuario);
  }

  borrarUsuario(id_usuario:any):Observable<any>{
    return this.conexionservicio.delete(this.API+"?borrarUsuario="+id_usuario);
  }

  modificarUsuario(id_usuario:any, datosUsuario:Usuario):Observable<any>{
    return this.conexionservicio.post(this.API+"?modificarUsuario="+id_usuario,datosUsuario);
  }

  obtenerUsuarioporId(id_usuario:any){
    return this.conexionservicio.get(this.API+"?consultarUsuarioporId="+id_usuario);
  }

} 
