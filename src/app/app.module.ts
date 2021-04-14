import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AngularFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './paginas/login/login.component';
import { ListadoComponent } from './paginas/listado/listado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';//Permite usar el ngModel y ngModelChange
import { AdminComponent } from './paginas/admin/admin.component';
import { JornadasComponent } from './components/jornadas/jornadas.component';
import { ListadoAlumnosComponent } from './components/listado-alumnos/listado-alumnos.component';
import { ListadoRolComponent } from './components/listado-rol/listado-rol.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BienvenidaComponent } from './paginas/bienvenida/bienvenida.component';
import { PipeMinusculasPipe } from './pipes/pipeMinusculas/pipe-minusculas.pipe';
import { AumentarDirective } from './directives/aumentar/aumentar.directive';
import {MatTableModule} from '@angular/material/table';
import { IconoRolPipe } from './pipes/iconoRol/icono-rol.pipe';
import {MatSortModule} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';











const config = {
  apiKey: "AIzaSyAf35Wm-5wmFW4VS0e7VkSURmrWdWmDnv0",
  authDomain: "lista-angular-5565a.firebaseapp.com",
  projectId: "lista-angular-5565a",
  storageBucket: "lista-angular-5565a.appspot.com",
  messagingSenderId: "96006701573",
  appId: "1:96006701573:web:8ee75ca7a925a2a7c6d26c",
  measurementId: "G-W3KM4WMCYL"
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListadoComponent,
    AdminComponent,
    JornadasComponent,
    ListadoAlumnosComponent,
    ListadoRolComponent,
    BienvenidaComponent,
    PipeMinusculasPipe,
    AumentarDirective,
    IconoRolPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private db: AngularFirestore) {
    const things = db.collection('things').valueChanges();
    console.log('RES');
    things.subscribe(console.log);
}
}
