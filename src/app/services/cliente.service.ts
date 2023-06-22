import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/clientes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  API: string='localhost/apiSalones/';

  constructor(
    private conexionservicio:HttpClient
  ) {}

  listarClientes(){
    return this.conexionservicio.get(this.API+"?listarClientes=");
  }

  agregarCliente(datosCliente:Cliente):Observable<any>{
    return this.conexionservicio.post(this.API+"?insertarCliente=1",datosCliente);
  }

  borrarCliente(id_cliente:any):Observable<any>{
    return this.conexionservicio.get(this.API+"?borrarCliente="+id_cliente);
  }

  modificarCliente(id_cliente:any, datosCliente:Cliente):Observable<any>{
    return this.conexionservicio.post(this.API+"?modificarCliente="+id_cliente,datosCliente);
  }

  obtenerClienteporId(id_cliente:any){
    return this.conexionservicio.get(this.API+"?consultarClienteporId="+id_cliente);
  }

}