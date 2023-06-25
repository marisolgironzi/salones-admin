import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/clientes';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit{
  formAgregarCliente: FormGroup;

  constructor (private fb:FormBuilder, private router:Router, private clienteService:ClienteService) {
    this.formAgregarCliente = this.fb.group({
      nombre:['', Validators.required],
      apellido:['',Validators.required],
      mail:['',Validators.required],
      telefono:['',Validators.required],
    })
  }

  ngOnInit(): void {
    
  }

  guardarCliente(){
    const cliente: Cliente={
      nombre: this.formAgregarCliente.value.nombre,
      apellido: this.formAgregarCliente.value.apellido,
      mail: this.formAgregarCliente.value.mail,
      telefono: this.formAgregarCliente.value.telefono,
    }
    this.clienteService.agregarCliente(cliente);
    this.router.navigate(['/listarClientes']);
  }
}
