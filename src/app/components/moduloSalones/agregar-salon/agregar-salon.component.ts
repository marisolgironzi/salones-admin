import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Salon } from 'src/app/interfaces/salones';
import { SalonService } from 'src/app/services/salon.service';

@Component({
  selector: 'app-agregar-salon',
  templateUrl: './agregar-salon.component.html',
  styleUrls: ['./agregar-salon.component.css']
})
export class AgregarSalonComponent implements OnInit{

  formAgregarSalon: FormGroup;

  constructor (private fb:FormBuilder, private router:Router, private salonService:SalonService) {
    this.formAgregarSalon = this.fb.group({
      nombre_salon:['', Validators.required],
      capacidad_desde:['',Validators.required],
      capacidad_hasta:['',Validators.required],
    })
  }

  ngOnInit(): void {
    
  }

  guardarSalon(){
    const salon: Salon={
      nombre_salon: this.formAgregarSalon.value.nombre_salon,
      capacidad_desde: this.formAgregarSalon.value.capacidad_desde,
      capacidad_hasta: this.formAgregarSalon.value.capacidad_hasta,
    }
    this.salonService.agregarSalon(salon);
    this.router.navigate(['/listarSalones']);
  }

}
