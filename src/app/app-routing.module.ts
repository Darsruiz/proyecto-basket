import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './paginas/admin/admin.component';
import { BienvenidaComponent } from './paginas/bienvenida/bienvenida.component';
import { ListadoComponent } from './paginas/listado/listado.component';
import { LoginComponent } from './paginas/login/login.component';
import { IsLogueadoGuard } from './guard/isLogueado/is-logueado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'formulario',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'formulario',
    component: ListadoComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [IsLogueadoGuard]
  },
  {
    path: 'bienvenida',
    component: BienvenidaComponent
  },
  {
    path:'**',
    redirectTo:'listado',
    pathMatch:'full'
  }
  
    //si alguien entra a la ruta '/' quiero que vaya al listado

    //quiero que si alguien pone unas rutas 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
