import { Component, OnInit } from '@angular/core';

//import the service and the model Note
import {NotesServiceService} from "../notes-service.service";
import {Note} from "../models/note";

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  //create and empty object 
  //the properties will be binded in the HTML
  //using the ngModel
  note: Note = {
    id: "",
    content: ""

  }


  //inject the service into the component constructor
  constructor(private notesService: NotesServiceService) { }

  //manages the submit of the form
  addNote() {
    //check if the input has a value on it
    if(this.note.content !=""){
      console.log(this.note.content);
      
      //call the service function to add the data to firestore
      this.notesService.addNoteToFirestore(this.note);

      //clear the values
    }else{
      console.log("There is nothing in the input field");
    }
  }

  ngOnInit() {
  }

}
