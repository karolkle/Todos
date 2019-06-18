import React, { Component } from 'react';

import './NoteForm.scss';


class NoteForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      newNoteContent: '',
      category: 'business',
      time: '',
      place: '',
     // button: false
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.writeNote = this.writeNote.bind(this);
  }
  
  handleUserInput(e){
    this.setState({
      newNoteContent: e.target.value,
    })
  }

  handleCategoryChange = (e) => {
   this.setState({
    category: e.target.value,
    });
  }

  handleTimeChange = (e) => {
    this.setState({
     time: e.target.value,
    });
  }

  handleButton() {
   this.setState({button: !this.state.button});
  }

  writeNote(){
   this.props.addNote(
   this.state.newNoteContent,
   this.state.category,
   this.state.time,
   );
  
    this.setState({
    newNoteContent: '',
    category: "business",
    time: '',
    place:''
    })
  }

  render() {
    return(
      <div className="form">
      <div className="title"><h1>New Task</h1></div>
      <form onSubmit={this.handleSubmit}>
      <select
        value={this.state.category}
        onChange={this.handleCategoryChange}>
          <option value="business">Business</option>
          <option value="work">Work</option>
          <option value="pleasure">Pleasure</option>
        </select>
        
        <input className="noteInput"
          placeholder="Write a new task..."
          value={this.state.newNoteContent}
          onChange={this.handleUserInput} />
        
        <input className="noteInput"
        placeholder="When you doing task..."
        value={this.state.time}
        onChange={this.handleTimeChange} />
        
        <button className="button_new"
          onClick={this.writeNote}
          disabled={!this.state.newNoteContent||!this.state.time}
          >
          ADD TASK
          </button>
       </form>
       </div>
    )
  }

}

export default NoteForm;