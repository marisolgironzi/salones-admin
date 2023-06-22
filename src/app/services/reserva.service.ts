import { Injectable } from '@angular/core';
import { Reserva } from '../interfaces/reservas';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  API: string='localhost/apiSalones/';

  constructor(
    private conexionservicio:HttpClient
  ) {}

  listarReservas(){
    return this.conexionservicio.get(this.API+"?listarReservas=");
  }

  agregarReserva(datosReserva:Reserva):Observable<any>{
    return this.conexionservicio.post(this.API+"?insertarReserva=1",datosReserva);
  }

  borrarReserva(id_reserva:any):Observable<any>{
    return this.conexionservicio.get(this.API+"?borrarReserva="+id_reserva);
  }

  modificarReserva(id_reserva:any, datosReserva:Reserva):Observable<any>{
    return this.conexionservicio.post(this.API+"?modificarReserva="+id_reserva,datosReserva);
  }

  obtenerReservaporId(id_reserva:any){
    return this.conexionservicio.get(this.API+"?consultarReservaporId="+id_reserva);
  }
}

