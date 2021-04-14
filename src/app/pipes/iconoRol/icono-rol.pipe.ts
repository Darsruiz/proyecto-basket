import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconoRol'
})
export class IconoRolPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    if(value === 'Jugador'){
      return 'sports-basketball'
    }else if(value === 'Entrenador'){
      return 'catching-pokemon'
    }else if(value === 'Árbitro'){
      return 'sports'
    }else{
      return 'people-alt'
    }
  }

}
