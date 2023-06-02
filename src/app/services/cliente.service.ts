import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
listClientes: Cliente[] = [
    {id_cliente: 1, nombre_cliente: 'Juan', apellido_cliente: 'Sánchez', mail_cliente: 'juansanchez@gmail.com', telefono_cliente: '011 15 666 777'}
  ];
  constructor() { }

  getCliente(){
    return this.listClientes.slice();
  }

  eliminarCliente(index:number){
    this.listClientes.splice(index, 1);
  }

}