import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-modificar-reserva',
  templateUrl: './modificar-reserva.component.html',
  styleUrls: ['./modificar-reserva.component.css']
})
export class ModificarReservaComponent implements OnInit{
  @Input() set reserva(valor: { nombre: any; nombre_salon: any; mes: any; anio: any; detalles: any}){
    this.crearForm();
    if(valor){
      this.reservaRegistroOriginal = valor;
      this.formEditarReserva.patchValue({
        nombre: valor.nombre,
        nombre_salon: valor.nombre_salon,
        mes: valor.mes,
        anio: valor.anio,
        detalles: valor.detalles,
      })
    }
  }

  @Output() cerrar=new EventEmitter();

  formEditarReserva!: FormGroup;
  reservaRegistroOriginal: any;

  constructor (private servicio: ReservaService, private fb:FormBuilder){

  }

  ngOnInit(): void {
    this.crearForm();
  }

  crearForm(){
    this.formEditarReserva=this.fb.group({
      nombre: '',
      nombre_salon: '',
      mes:  '',
      anio: '',
      detalles: '',
    })
  }

  onGuardarModificacion(){
    this.servicio.modificarReserva(this.reservaRegistroOriginal.$id_reserva,this.formEditarReserva.value);
  }

}
