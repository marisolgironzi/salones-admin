import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit{
  usuarios:any;
  
    constructor(
      public formulario: FormBuilder,
      private servicio: UsuarioService
    ) {}

  ngOnInit(): void {
    this.servicio.listarUsuarios().subscribe(respuesta=>{
      this.usuarios=respuesta;
    });
  }

  borrarRegistroUsuario(id_usuario:any, iControl:any){
    if(window.confirm("¿Confirma que desea borrar este usuario?")){
      this.servicio.borrarUsuario(id_usuario).subscribe(
        (respuesta)=>{
          this.usuarios.splice(iControl,1);
        }
      );
    }
  }
}
