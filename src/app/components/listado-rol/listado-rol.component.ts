import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
selector: 'app-listado-rol',
templateUrl: './listado-rol.component.html',
styleUrls: ['./listado-rol.component.css']
})
export class ListadoRolComponent implements OnInit {

@Output() rol = new EventEmitter()
selectedItem = 'Jugador'
rolesArray = [
'Jugador', 'Árbitro', 'Entrenador', 'Otros'
]


constructor() { }

ngOnInit(): void {
console.log('THIS.SELECTED iTEM', this.selectedItem)
this.rol.emit(this.selectedItem);
}

onChange(ev:string){
console.log('EV', ev);
this.rol.emit(ev);
}



}