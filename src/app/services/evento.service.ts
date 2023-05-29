import { Injectable } from '@angular/core';
import { Evento } from '../interfaces/eventos';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  listEventos: Evento[] = [
    {idEvento: 1, nombre: 'Corporativo'}
  ];
  constructor() { }

  getEvento(){
    return this.listEventos.slice();
  }

  eliminarEvento(index:number){
    this.listEventos.splice(index, 1);
  }

}