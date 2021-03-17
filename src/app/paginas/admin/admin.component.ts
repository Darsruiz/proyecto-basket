import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-admin',
templateUrl: './admin.component.html',
styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

jornadaAFiltrar;

constructor() { }

ngOnInit(): void {
}

filtrarPorJornada(jornada:number){
console.log('filtrar por jornada', jornada);
this.jornadaAFiltrar = jornada;
}

}