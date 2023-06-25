import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SalonService } from 'src/app/services/salon.service';

@Component({
  selector: 'app-listar-salones',
  templateUrl: './listar-salones.component.html',
  styleUrls: ['./listar-salones.component.css']
})
export class ListarSalonesComponent implements OnInit{
  salones:any;
  
    constructor(
      public formulario: FormBuilder,
      private servicio: SalonService
    ) {}

  ngOnInit(): void {
    this.servicio.listarSalones().subscribe(respuesta=>{
      this.salones=respuesta;
    });
  }

  borrarRegistroSalon(id_salon:any, iControl:any){
    if(window.confirm("¿Confirma que desea borrar este salón?")){
      this.servicio.borrarSalon(id_salon).subscribe(
        (respuesta)=>{
          this.salones.splice(iControl,1);
        }
      );
    }
  }
}
