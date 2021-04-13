import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogueadoService {

  private estoyLogueado: boolean = false;

  constructor() { }

  //getter
  getEstado(){
    //devolver el dato estoy logueado
    return this.estoyLogueado
  }

  //setter
  setEstado(estado:boolean){
    this.estoyLogueado = estado
  }

}