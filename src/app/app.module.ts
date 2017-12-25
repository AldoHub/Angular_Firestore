import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

//import AngularFireModule
import {AngularFireModule} from "angularfire2";
//import Firestore Module
import {AngularFirestoreModule} from "angularfire2/firestore";

//import environment
import {environment} from "../environments/environment";
import { NotesComponent } from './notes/notes.component';

//import the service and add it to the providers
import  {NotesServiceService} from "./notes-service.service";
import { NavbarComponent } from './navbar/navbar.component';
import { AddNoteComponent } from './add-note/add-note.component';


// init firestore inside the imports and add the name of the current app


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NavbarComponent,
    AddNoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase,"angular-firestore"),
    AngularFirestoreModule
  ],
  providers: [NotesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
