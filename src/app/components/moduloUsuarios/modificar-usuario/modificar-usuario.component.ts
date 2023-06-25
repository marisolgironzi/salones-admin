import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit{

  @Input() set usuario(valor: { nombre: any; apellido: any; usuario: any; contrasenia: any; categoria: any; }){
    this.crearForm();
    if(valor){
      this.usuarioRegistroOriginal = valor;
      this.formEditarUsuario.patchValue({
        nombre: valor.nombre,
        apellido: valor.apellido,
        usuario: valor.usuario,
        contrasenia: valor.contrasenia,
        categoria: valor.categoria
      })
    }
  }

  @Output() cerrar=new EventEmitter();

  formEditarUsuario!: FormGroup;
  usuarioRegistroOriginal: any;

  constructor (private servicio: UsuarioService, private fb:FormBuilder){

  }

  ngOnInit(): void {
    this.crearForm();
  }

  crearForm(){
    this.formEditarUsuario=this.fb.group({
      nombre:'',
      apellido:'',
      usuario:'',
      contrasenia:'',
      categoria:''
    })
  }

  onGuardarModificacion(){
    this.servicio.modificarUsuario(this.usuarioRegistroOriginal.$id_usuario,this.formEditarUsuario.value);
  }

}
