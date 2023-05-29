import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuarios';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
    selector: 'app-crear-usuario',
    templateUrl: './crear-usuario.component.html',
    styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {

    form: FormGroup;

    constructor (private fb: FormBuilder, private _usuarioService: UsuarioService, private router:Router, private _snackBar: MatSnackBar){
        this.form=this.fb.group({
            idUsuario: ['', Validators.required],
            nombre: ['', Validators.required],
            apellido: ['', Validators.required],
            usuario: ['', Validators.required],
            idCategoria: ['', Validators.required],
        })
    }

    agregarUsuario(){
        const user:Usuario={
            idUsuario:this.form.value.idUsuario,
            nombre:this.form.value.nombre,
            apellido:this.form.value.apellido,
            usuario:this.form.value.usuario,
            idCategoria:this.form.value.idCategoria
        }
        this._usuarioService.agregarUsuario(user);
        this.router.navigate(['./usuarios']);
        this._snackBar.open('El usuario fue agregado con éxito', '',{
            duration:1500,
            horizontalPosition:'center',
            verticalPosition:'bottom'
        })
    }
}
