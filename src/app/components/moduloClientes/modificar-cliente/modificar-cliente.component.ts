import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrls: ['./modificar-cliente.component.css']
})
export class ModificarClienteComponent implements OnInit{
  @Input() set cliente(valor: { nombre: any; apellido: any; mail: any; telefono: any}){
    this.crearForm();
    if(valor){
      this.clienteRegistroOriginal = valor;
      this.formEditarCliente.patchValue({
        nombre: valor.nombre,
        apellido: valor.apellido,
        mail: valor.mail,
        telefono: valor.telefono,
      })
    }
  }

  @Output() cerrar=new EventEmitter();

  formEditarCliente!: FormGroup;
  clienteRegistroOriginal: any;

  constructor (private servicio: ClienteService, private fb:FormBuilder){

  }

  ngOnInit(): void {
    this.crearForm();
  }

  crearForm(){
    this.formEditarCliente=this.fb.group({
      nombre:'',
      apellido:'',
      mail:'',
      telefono:'',
    })
  }

  onGuardarModificacion(){
    this.servicio.modificarCliente(this.clienteRegistroOriginal.$id_cliente,this.formEditarCliente.value);
  }
}
