import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
listClientes: Cliente[] = [
    {idCliente: 1, nombre: 'Juan', apellido: 'Sánchez', mail: 'juansanchez@gmail.com', telefono: '011 15 666 777'}
  ];
  constructor() { }

  getCliente(){
    return this.listClientes.slice();
  }

  eliminarCliente(index:number){
    this.listClientes.splice(index, 1);
  }

}