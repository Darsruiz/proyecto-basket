import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
selector: 'app-listado',
templateUrl: './listado.component.html',
styleUrls: ['./listado.component.css']
})


export class ListadoComponent {

nombre;
apellido1;
apellido2;
alumnosRef;
alumnosArray = [];
rol;
jornada;


constructor(
private route: Router,
private db: AngularFirestore
) {
this.alumnosRef = this.db.collection('alumnos')//.doc().collection().doc();//.doc('adfasdfasdf').set({})

}


jornadasDefinidas(jornadaParameter){
console.log('JORNADA',jornadaParameter);
this.jornada = jornadaParameter
}

salir(){
this.route.navigateByUrl('login')
}

crearAlumno(nombre, apellido1, apellido2, telefono, dni, email){
console.log('nombre', nombre);
console.log('apellido1', apellido1);
console.log('apellido2', apellido2);

this.alumnosRef.doc(dni).set({
nombre,
apellido1,
apellido2,
telefono,
dni,
email,
rol: this.rol,
date: new Date(),
jornada: parseInt(this.jornada)
})
}

// esta función sirve para escuchar del hijo el rol
rolDefinido(rolParameter:string){
this.rol = rolParameter;
}

}