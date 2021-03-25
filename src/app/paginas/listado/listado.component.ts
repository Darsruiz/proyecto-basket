import { AfterViewChecked, Component, OnDestroy, OnChanges, AfterViewInit, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as dni from 'dni-js-validator';
import * as EmailValidator from 'email-validator';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
selector: 'app-listado',
templateUrl: './listado.component.html',
styleUrls: ['./listado.component.css']
})


export class ListadoComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {


alumnosRef;
alumnosArray = [];
rol;
jornada;
nombreWrong;
phoneWrong;
keydownFalse = false;
dniWrong;
emailWrong;

constructor(//servicios
private route: Router,
private db: AngularFirestore,
private snackbar: MatSnackBar
) {
this.alumnosRef = this.db.collection('alumnos');
console.log('CONSTRUCTOR LISTADO COMPONENTS');
}

ngOnInit(){
console.log('NG ON INIT');
}
ngAfterViewInit(){
console.log('AFTER VIEW INIT');
}
ngOnChanges(){
console.log('NG ON CHANGES');
}
ngOnDestroy(){
console.log('NG ON DESTROY')
}


comprobarNombre(nombre:string){
const length = nombre.length;
( length > 100 || length < 1 ) ? this.nombreWrong = 'error' : this.nombreWrong = 'success' ;
}

comprobarDni(dniParam:string){
( dni.isValid(dniParam)) ? this.dniWrong = 'success' : this.dniWrong ='error';
}

comprobarEmail(email:string){
(EmailValidator.validate(email)) ? this.emailWrong = 'success' : this.emailWrong = 'error'
}


comprobarTelefono(telefono: string){
(telefono.length === 9) ? this.phoneWrong = 'success' : this.phoneWrong = 'error'
}


jornadasDefinidas(jornadaParameter): void{
this.jornada = jornadaParameter
}

comprobacion():boolean {
const nombre: boolean = ( this.nombreWrong === 'success' )
const phone: boolean = ( this.phoneWrong === 'success' )
const email: boolean = (this.emailWrong === 'success' )
const dni: boolean = ( this.dniWrong === 'success' )

if( nombre && phone && email && dni ){
return true
}else{
return false
}
}

crearAlumno(nombre, telefono, dni, email){

if(this.comprobacion()){
this.db.collection('alumnos').doc(dni).set({
nombre,
telefono,
dni,
email,
rol: this.rol,
date: new Date(),
jornada: parseInt(this.jornada)
})
.then(()=>{
// RESUPESTA EXITOSA
this.snackbar.open('Datos recibidos correctamente', 'OK', {
panelClass: ['successSnackbar']
})

/// LE REDIRECCIONO A OTRA PÁGINA LLAMADA BIENVENIDA;
this.route.navigateByUrl('bienvenida');
})
.catch((e)=>{
this.snackbar.open('Error del servidor', 'OK', {
panelClass: ['errorSnackbar']
})
console.error('Error', e)
// NOS DA ERROR
})

}else{
this.snackbar.open('Formulario incorrecto', 'OK', {
panelClass: ['errorSnackbar']
})
this.nombreWrong = (this.nombreWrong === null ) ? 'error' : null; //'error';
this.emailWrong = (this.emailWrong === null ) ? 'error' : null; //'error';
this.phoneWrong = (this.phoneWrong === null ) ? 'error' : null; //'error';
this.dniWrong = (this.dniWrong === null )? 'error' : null; //'error';
}
}

salir(){
this.route.navigateByUrl('login')
}

// esta función sirve para escuchar del hijo el rol
rolDefinido(rolParameter:string){
console.log('ROL DEFINIDO PADRE', rolParameter)
this.rol = rolParameter;
}

}

