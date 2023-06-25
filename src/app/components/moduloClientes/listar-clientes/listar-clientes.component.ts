import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit{
  clientes:any;
  
    constructor(
      public formulario: FormBuilder,
      private servicio: ClienteService
    ) {}

  ngOnInit(): void {
    this.servicio.listarClientes().subscribe(respuesta=>{
      this.clientes=respuesta;
    });
  }

  borrarRegistroCliente(id_cliente:any, iControl:any){
    if(window.confirm("¿Confirma que desea borrar este cliente?")){
      this.servicio.borrarCliente(id_cliente).subscribe(
        (respuesta)=>{
          this.clientes.splice(iControl,1);
        }
      );
    }
  }
}
}
