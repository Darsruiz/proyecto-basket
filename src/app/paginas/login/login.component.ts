import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LogueadoService } from '../../servicios/logueado/logueado.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

hide = true
array= []
formData: FormGroup
pipeVar = 'HOLA'


constructor(
private snackbar: MatSnackBar,
private route: Router,
private logueado: LogueadoService,
private fb: FormBuilder
) {
}


ngOnInit(){

const email = [
{
value:'', disabled: false
} , [
Validators.required,
Validators.email
]

];

const password = [
{ value: '', disabled: false }
,
[
Validators.required,
Validators.minLength(2),
Validators.maxLength(5),
Validators.pattern('^[^.]+$')
]

];

const config = { email , password };

this.formData = this.fb.group(config)
}

get email(){ return this.formData.get('email') }
get password(){ return this.formData.get('password') }


login(){
//this.login()

console.log('HAY UN EMAIL Y UN PASSWORD');
/// TENGO QUE COMPROBAR SI EL EMAIL Y EL PASSWORD COINCIDEN
if ( (this.formData.get('email').value ==='aeblapalma@gmail.com') && this.formData.get('password').value === 'Spartans.lapalma') {
/// SI COINCIDEN ENTRA AQUI


this.route.navigateByUrl('admin');
this.logueado.setEstado(true)
} else {
this.logueado.setEstado(false)
/// SI NO COINCIDEN ENTRA AQUI
this.snackbar.open('Email o password incorrectos', 'OK', {
panelClass: ['errorSnackbar']
})
}

}
}