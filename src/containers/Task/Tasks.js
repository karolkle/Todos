import React from 'react'
//import New from '../New/New'
import firebase from 'firebase/app';
import 'firebase/database';
import Note from './Task'
import './Task.scss'

const config = {
  apiKey: "AIzaSyC9frCK44feaXtXaarpxz9R_1RCZXF0Vf4",
  authDomain: "karol-todo.firebaseapp.com",
  databaseURL: "https://karol-todo.firebaseio.com",
  projectId: "karol-todo",
  storageBucket: "karol-todo.appspot.com",
  messagingSenderId: "724651227442",
  
};

class Task extends React.Component {
  
    constructor(props){
      super(props);
      //this.addNote = this.addNote.bind(this); 
      this.removeNote = this.removeNote.bind(this);
      
      this.app = firebase.initializeApp(config);
      /*Pole bazy*/
      this.database = this.app.database().ref().child('tasks');
  
  
      this.state = {
        notes: [],
      }
    }
  
    componentWillMount() {
      const previousNotes = this.state.notes;
  
      this.database.on('child_added', snap => {
        previousNotes.push({
          id: snap.key,
          noteContent: snap.val().noteContent,
          category: snap.val().category,
          time: snap.val().time,
         
        })
        this.setState({
          notes: previousNotes
        })
      } )
  
      this.database.on('child_removed', snap => {
        for(var i=0; i < previousNotes.length; i++) {
          if(previousNotes[i].id === snap.key){
            previousNotes.splice(i, 1);
          }
          this.setState({
          notes: previousNotes
        })
  
        }
      })
    }
  /*P*/
   /* addNote(note, cat){
      this.database.push().set({noteContent: note, category: cat});
     
    }*/
  
    
    removeNote(noteId) {
      this.database.child(noteId).remove();
  
    }
  
    render() {
      return (
        <div className="notesWrapper">
           <div className="title"><h1>Tasks</h1></div>
          <div className="Items">
            {
              this.state.notes.map((note) => {
                return (
                  <Note 
                    noteContent={note.noteContent}
                    category={note.category}
                    time={note.time}
                  
                    noteId={note.id} 
                    key={note.id} 
                    removeNote = {this.removeNote}
                    />
                )
              })            
            }
            
          </div>
          
        </div>
      );
          }
  }

export default Task;