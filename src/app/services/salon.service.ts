import { Injectable } from '@angular/core';
import { Salon } from '../interfaces/salones';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalonService {
  API: string='https://github.com/marisolgironzi/salones-api';

  constructor(
    private conexionservicio:HttpClient
  ) {}

  listarSalones(){
    return this.conexionservicio.get(this.API+"?listarSalones=");
  }

  agregarSalon(datosSalon:Salon):Observable<any>{
    return this.conexionservicio.post(this.API+"?insertarSalon=1",datosSalon);
  }

  borrarSalon(id_salon:any):Observable<any>{
    return this.conexionservicio.get(this.API+"?borrarSalon="+id_salon);
  }

  modificarSalon(id_salon:any, datosSalon:Salon):Observable<any>{
    return this.conexionservicio.post(this.API+"?modificarSalon="+id_salon,datosSalon);
  }

  obtenerSalonporId(id_salon:any){
    return this.conexionservicio.get(this.API+"?consultarSalonporId="+id_salon);
  }
}
