import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import Swal from 'sweetalert2'

@Component({
selector: 'app-listado-alumnos',
templateUrl: './listado-alumnos.component.html',
styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent implements OnInit, OnChanges {


alumnosRef;
alumnosArray = [];
alumnosArrayFiltrado = [];
@Input() jornada;

constructor(private db: AngularFirestore ) {
this.alumnosRef = this.db.collection('alumnos');



}

ngOnInit(): void {
    const alumnos = this.db.collection('alumnos').snapshotChanges()
    alumnos.subscribe((res:any)=>{
    const arrayMapped = res.map((a)=>{
    const data = a.payload.doc.data();
    const id = a.payload.doc.id;
    return {data, id}
    })
    this.alumnosArray = arrayMapped;
    this.alumnosArrayFiltrado = this.alumnosArray;
    console.log('ARRAY MAPPED', arrayMapped)
    });
}

ngOnChanges(changes: SimpleChanges) {
console.log('NG ON CHANGES');
this.filtrar()

}

filtrar(){
const jornadaParseada = parseInt(this.jornada);
this.alumnosArrayFiltrado = this.alumnosArray.filter((participante)=>{
if(participante.data.jornada === jornadaParseada ){
return true
}else{
return false
}
})
}

eliminar(id:string){
    console.log('id', id);
    
    Swal.fire({
    title: '¿Estás seguro que deseas eliminarlo?',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it'
    }).then((result) => {
    if (result.value) {
    // QUIERO ELIMINAR A ESTE USUARIO;
    this.alumnosRef.doc(id).delete()
    
    }
    })
    //
    }
}