import { Injectable } from '@angular/core';
import { Reserva } from '../interfaces/reservas';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  listReservas: Reserva[] = [
    {id_reserva: 1 , idCliente_reserva: 1, idSalon_reserva: 1, mes_reserva: 'mayo', anio_reserva: 2023}
  ];
  constructor() { }

  getReserva(){
    return this.listReservas.slice();
  }

  eliminarReserva(index:number){
    this.listReservas.splice(index, 1);
  }

}

