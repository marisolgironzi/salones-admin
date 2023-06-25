import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-listar-reservas',
  templateUrl: './listar-reservas.component.html',
  styleUrls: ['./listar-reservas.component.css']
})
export class ListarReservasComponent implements OnInit{
  reservas:any;
  
    constructor(
      public formulario: FormBuilder,
      private servicio: ReservaService
    ) {}

  ngOnInit(): void {
    this.servicio.listarReservas().subscribe(respuesta=>{
      this.reservas=respuesta;
    });
  }

  borrarRegistroReserva(id_reserva:any, iControl:any){
    if(window.confirm("¿Confirma que desea borrar esta reserva?")){
      this.servicio.borrarReserva(id_reserva).subscribe(
        (respuesta)=>{
          this.reservas.splice(iControl,1);
        }
      );
    }
  }
}
