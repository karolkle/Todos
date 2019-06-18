import React from 'react'
import NoteForm from './NoteForm/NoteForm';
import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyC9frCK44feaXtXaarpxz9R_1RCZXF0Vf4",
  authDomain: "karol-todo.firebaseapp.com",
  databaseURL: "https://karol-todo.firebaseio.com",
  projectId: "karol-todo",
  storageBucket: "karol-todo.appspot.com",
  messagingSenderId: "724651227442",
  
};

class TodoNew extends React.Component {
 
  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this); 
    this.app = firebase.initializeApp(config);
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
        time: snap.val.time,
        category: snap.val().category
       
      })
      this.setState({
        notes: previousNotes
      })
    } )
  }
   
  addNote(note, cat, time){
    this.database.push().set({noteContent: note, category: cat, time: time});
  }

 
  render(){
    return(
      <div className="notesFooter">
       <NoteForm addNote={this.addNote}/>
       </div>
    )
  }
}

export default TodoNew;