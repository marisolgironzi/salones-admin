import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuarios';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit{

  formAgregarUsuario: FormGroup;

  constructor (private fb:FormBuilder, private router:Router, private usuarioService: UsuarioService) {
    this.formAgregarUsuario = this.fb.group({
      nombre:['', Validators.required],
      apellido:['',Validators.required],
      usuario:['',Validators.required],
      contrasenia:['',Validators.required],
      categoria:['',Validators.required]
    })
  }

  ngOnInit(): void {
    
  }

  guardarUsuario(){
    const usuario: Usuario={
      nombre: this.formAgregarUsuario.value.nombre,
      apellido: this.formAgregarUsuario.value.apellido,
      usuario: this.formAgregarUsuario.value.usuario,
      contrasenia: this.formAgregarUsuario.value.contrasenia,
      categoria: this.formAgregarUsuario.value.categoria
    }
    this.usuarioService.agregarUsuario(usuario);
    this.router.navigate(['/listarUsuarios']);
  }

}
