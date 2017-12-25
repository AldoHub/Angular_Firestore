import { Component, OnInit } from '@angular/core';

//import the service
import {NotesServiceService} from "../notes-service.service";
//import the interface
import {Note} from "../models/note";


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Note[];
  edit: boolean = false;
  noteToEdit: Note;


  //inject the service to the constructor
  constructor(private notesService: NotesServiceService) { }


  //manages note deletion
  deleteNote(event, note: Note){
    //call the service function to delete the note
    this.notesService.deleteNoteFromFirestore(note);
    this.clear();
  }


  //manages the edit of the note
  editNote(event, note: Note){
    console.log(note);
    //set the state of edit property to true, so we show the form
    this.edit = true;
    //get the object that will be updated / edited
    this.noteToEdit= note;

  }


  //update the note
  updateNote(note: Note){
    this.notesService.updateNoteInsideFirestore(note);
    this.clear();
  }

  //collapse the edit panel
  collapsePanel(){
    console.log("panel will be closed!!");
    this.clear();
  }

  //clear the remanents of the objects
  clear(){
     //set the edit mode to false
     this.edit = false;
     //and the note to null
     this.noteToEdit = null;
  }

  ngOnInit() {
    //call the service function
    this.notesService.getNotes().subscribe((notes)=>{
      //its an observable so we need to subscribe to it
      console.log(notes);
      //assign the response to the notes property
      
      this.notes = notes;

    });
  

  }

}
