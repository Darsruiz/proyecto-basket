import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  nombre;
  apellido1;
  apellido2;
  alumnosRef;
  alumnosArray = [];

  constructor(private route: Router,
    private db: AngularFirestore
    ) { 
      this.alumnosRef = this.db.collection('alumnos')
      const alumnos = this.db.collection('alumnos').snapshotChanges();
      alumnos.subscribe((res:any)=>{
        console.log('LINEA 26')
        const arrayMapped = res.map((a)=>{
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {data, id}
        })
        this.alumnosArray = arrayMapped
        console.log('ARRAY MAPPED', arrayMapped)
        });
    }

 eliminar(id){
   console.log('id', id);
   this.alumnosRef.doc(id).delete()
 }

 salir(){
   this.route.navigateByUrl('login')
 }

 crearAlumno(nombre, apellido1, apellido2){
  console.log('nombre', nombre);
  console.log('apellido1', apellido1);
  console.log('apellido2', apellido2);

  this.alumnosRef.add({
  nombre,
  apellido1,
  apellido2 })
  }

}
