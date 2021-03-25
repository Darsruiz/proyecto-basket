import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';

@Component({
selector: 'app-jornadas',
templateUrl: './jornadas.component.html',
styleUrls: ['./jornadas.component.css']
})
export class JornadasComponent implements OnInit, OnDestroy {


selectedItem;
jornadasArray = [];
cuantasJornadasHay;
enQueJornadaEstoy;
@Output() jornada = new EventEmitter();
subscripcionAJornadas: Subscription;


constructor( private db: AngularFirestore) {
}

ngOnInit(): void {
    this.subscripcionAJornadas = this.db.collection('jornadas').valueChanges().subscribe((res)=>{
        this.cuantasJornadasHay = res.find((ele)=>{
        return ele['jornadas']
        })
        this.crearArrayDeJornadas(this.cuantasJornadasHay.jornadas);
        this.enQueJornadaEstoy = res.find((ele)=>{
        return ele['jornadaActual']
        })
        this.selectedItem = this.enQueJornadaEstoy.jornadaActual;
        this.jornada.emit(this.selectedItem)
        })
}

ngOnDestroy(){
if(this.subscripcionAJornadas){
this.subscripcionAJornadas.unsubscribe()
}
}

crearArrayDeJornadas(jornadas:number){

this.jornadasArray = [];
for (let index = 0; index < jornadas; index++) {
console.log('CADA ITERACION')
// tengo que añadir al array de jornadasArray cada elemento index en cada iteracion
this.jornadasArray.push(index+1)
}
console.log('THIS.JORANDASARRAY', this.jornadasArray)
}

onChange(event){
console.log('event',event);
this.jornada.emit(event)

}

}