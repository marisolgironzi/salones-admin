import { Injectable } from '@angular/core';
import { Reserva } from '../interfaces/reservas';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  listReservas: Reserva[] = [
    {idReserva: 1 , idCliente: 1, idSalon: 1, idEvento: 1, idAdicional: 1, mes: 'mayo', anio: 2023, detalles: '100 personas'}
  ];
  constructor() { }

  getReserva(){
    return this.listReservas.slice();
  }

  eliminarReserva(index:number){
    this.listReservas.splice(index, 1);
  }

}

