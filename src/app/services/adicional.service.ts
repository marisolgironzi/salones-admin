import { Injectable } from '@angular/core';
import { Adicional } from '../interfaces/adicionales';

@Injectable({
  providedIn: 'root'
})
export class AdicionalService {
listAdicionales: Adicional[] = [
    {idAdicional: 1, nombre: 'Catering'}
  ];
  constructor() { }

  getAdicional(){
    return this.listAdicionales.slice();
  }

  eliminarAdicional(index:number){
    this.listAdicionales.splice(index, 1);
  }

}