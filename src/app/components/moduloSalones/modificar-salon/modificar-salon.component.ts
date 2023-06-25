import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SalonService } from 'src/app/services/salon.service';

@Component({
  selector: 'app-modificar-salon',
  templateUrl: './modificar-salon.component.html',
  styleUrls: ['./modificar-salon.component.css']
})
export class ModificarSalonComponent implements OnInit{

  @Input() set salon(valor: { nombre_salon: any; capacidad_desde: any; capacidad_hasta: any}){
    this.crearForm();
    if(valor){
      this.salonRegistroOriginal = valor;
      this.formEditarSalon.patchValue({
        nombre_salon: valor.nombre_salon,
        capacidad_desde: valor.capacidad_desde,
        capacidad_hasta: valor.capacidad_hasta,
      })
    }
  }

  @Output() cerrar=new EventEmitter();

  formEditarSalon!: FormGroup;
  salonRegistroOriginal: any;

  constructor (private servicio: SalonService, private fb:FormBuilder){

  }

  ngOnInit(): void {
    this.crearForm();
  }

  crearForm(){
    this.formEditarSalon=this.fb.group({
      nombre_salon:'',
      capacidad_desde:'',
      capacidad_hasta:''
    })
  }

  onGuardarModificacion(){
    this.servicio.modificarSalon(this.salonRegistroOriginal.$id_salon,this.formEditarSalon.value);
  }

}