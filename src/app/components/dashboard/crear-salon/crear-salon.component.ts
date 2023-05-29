import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Salon } from 'src/app/interfaces/salones';
import { SalonService } from 'src/app/services/salon.service';

@Component({
    selector: 'app-crear-salon',
    templateUrl: './crear-salon.component.html',
    styleUrls: ['./crear-salon.component.css']
})
export class CrearSalonComponent {
    form: FormGroup;

    constructor (private fb: FormBuilder, private _salonService: SalonService, private router:Router, private _snackBar: MatSnackBar){
        this.form=this.fb.group({
            idSalon: ['', Validators.required],
            nombre: ['', Validators.required],
            capacidadDesde: ['', Validators.required],
            capacidadHasta: ['', Validators.required],
        })
    }

    agregarSalon(){
        const salon:Salon={
            idSalon:this.form.value.idSalon,
            nombre:this.form.value.nombre,
            capacidadDesde:this.form.value.capacidadDesde,
            capacidadHasta:this.form.value.capacidadHasta,
        }
        this._salonService.agregarSalon(salon);
        this.router.navigate(['./salones']);
        this._snackBar.open('El salón fue agregado con éxito', '',{
            duration:1500,
            horizontalPosition:'center',
            verticalPosition:'bottom'
        })
    }
}
