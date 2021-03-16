import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent /*implements OnInit*/ {

  email: string | undefined;
  password: string | undefined;

  constructor( private route: Router)/*esto es un servicio*/ { }

  /*ngOnInit(): void {
  }*/

  login(){
    if(this.email && this.password){
      console.log('HAY UN EMAIL Y UN PASSWORD');
      this.route.navigateByUrl('listado')
      //LE VAMOS A LLEVAR A LA PÁGINA DE LISTADO
      //this.route.navigate
    }else{
      console.log('FALTA EMAIL O PASSWORD')
    }
  };

}
