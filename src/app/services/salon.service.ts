import { Injectable } from '@angular/core';
import { Salon } from '../interfaces/salones';

@Injectable({
  providedIn: 'root'
})
export class SalonService {
  listSalones: Salon[] = [
    {idSalon: 1, nombre: "Agata", capacidadDesde: 20, capacidadHasta: 50}
  ];
  constructor() { }

  getSalon(){
    return this.listSalones.slice();
  }

  eliminarSalon(index:number){
    this.listSalones.splice(index, 1);
  }

  agregarSalon(salon:Salon){
    this.listSalones.unshift(salon);
  }
}
