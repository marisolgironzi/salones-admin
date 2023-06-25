import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Reserva } from 'src/app/interfaces/reservas';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-agregar-reserva',
  templateUrl: './agregar-reserva.component.html',
  styleUrls: ['./agregar-reserva.component.css']
})
export class AgregarReservaComponent implements OnInit{

  formAgregarReserva: FormGroup;

  constructor (private fb:FormBuilder, private router:Router, private reservaService:ReservaService) {
    this.formAgregarReserva = this.fb.group({
      nombre:['', Validators.required],
      nombre_salon:['',Validators.required],
      mes:['',Validators.required],
      anio:['',Validators.required],
      detalles:['',Validators.required],
    })
  }

  ngOnInit(): void {
    
  }

  guardarReserva(){
    const reserva: Reserva={
      nombre: this.formAgregarReserva.value.nombre,
      nombre_salon: this.formAgregarReserva.value.nombre_salon,
      mes: this.formAgregarReserva.value.mes,
      anio: this.formAgregarReserva.value.anio,
      detalles: this.formAgregarReserva.value.detalles,
    }
    this.reservaService.agregarReserva(reserva);
    this.router.navigate(['/listarReservas']);
  }
}
