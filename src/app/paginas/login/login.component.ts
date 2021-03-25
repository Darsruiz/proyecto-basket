import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LogueadoService } from '../../servicios/logueado/logueado.service';


@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent {


  email: string | undefined;
  password: string | undefined;
  array= [];


  constructor(
  private snackbar: MatSnackBar,
  private route: Router,
  private logueado: LogueadoService
  ) {

  }


  login(){
    //this.login()
    if(this.email && this.password ){
    console.log('HAY UN EMAIL Y UN PASSWORD');
    /// TENGO QUE COMPROBAR SI EL EMAIL Y EL PASSWORD COINCIDEN

      if ( this.email === 'aeblapalma@gmail.com' && this.password === '123') {
      /// SI COINCIDEN ENTRA AQUI
      this.route.navigateByUrl('admin');
      this.logueado.setEstado(true)
      } else {
      this.logueado.setEstado(false)

      /// SI NO COINCIDEN ENTRA AQUI
      this.snackbar.open('Email o password', 'OK', {
      panelClass: ['errorSnackbar']
      })
      }
    }else{
    this.logueado.setEstado(false)
    this.snackbar.open('Error falta email o password', 'OK', {
    panelClass: ['errorSnackbar']
    })

    console.log('FALTA EMAIL O PASSWORD');
    }
  }
}
