import { Injectable } from '@angular/core';

//import firestore / firebase modules 
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";

//import the interface
import {Note} from "./models/note";

@Injectable()
export class NotesServiceService {

  notesCollection: AngularFirestoreCollection<Note>;
  notes: Observable<Note[]>;
  noteDoc: AngularFirestoreDocument<Note>;



  //inject firestore 
  constructor(public firestore: AngularFirestore) {
  
    //set the collection to the one in the database
    this.notesCollection = this.firestore.collection("Notes");
      
    //assign the snapshot from the database to the notes property
    //this way we can get the ID of the objects 
    this.notes = this.notesCollection.snapshotChanges().map((changes)=>{
      return changes.map((data)=>{
        //get the data inside the "data" response object
        const dataInfo= data.payload.doc.data();
        //get the id from the "data" response object
        dataInfo.id = data.payload.doc.id;
        return dataInfo;
      });
    }); 
  } 

  getNotes(){
    //get the notes property, that should contain the objects from the firestore database
    return this.notes;
  }

  //adds the note object to the firestore database
  addNoteToFirestore(note: Note){
    //add to the notesCollection
    this.notesCollection.add(note);

  }

  //deletes the note object form the firestore database
  deleteNoteFromFirestore(note: Note){
      console.log(note);
      //get the reference of the collection and the item to delete
      this.noteDoc = this.firestore.doc(`Notes/${note.id}`);
      this.noteDoc.delete();
  };

  //updates the object
  updateNoteInsideFirestore(note: Note){
    console.log(note);
    this.noteDoc = this.firestore.doc(`Notes/${note.id}`);
    this.noteDoc.update(note);
  }

}
