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
import { FormsModule } from '@angular/forms';

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
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    FormsModule
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
