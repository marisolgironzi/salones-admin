import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//Angular Material
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form: FormGroup;

  constructor (private fb:FormBuilder, private _snackBar:MatSnackBar, private router:Router) {
    this.form = this.fb.group({
      usuario:['', Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
    
  }

  ingresar(){
    const usuario=this.form.value.usuario;
    const password=this.form.value.password;

    if(usuario=='admin' && password=='admin123'){
      this.router.navigate(['/dashboard']);
    } else{
      this.error();
      this.form.reset();
    }
  }

  error(){
    this._snackBar.open('Usuario o contraseña inválido','',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }

}