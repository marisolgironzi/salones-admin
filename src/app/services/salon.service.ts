import { Injectable } from '@angular/core';
import { Salon } from '../interfaces/salones';

@Injectable({
  providedIn: 'root'
})
export class SalonService {
  listSalones: Salon[] = [
    {id_salon: 1, nombre_salon: "Agata", capacidadDesde_salon: 20, capacidadHasta_salon: 50}
  ];
  constructor() { }

  getSalon(){
    return this.listSalones.slice();
  }

  eliminarSalon(index:number){
    this.listSalones.splice(index, 1);
  }

}
