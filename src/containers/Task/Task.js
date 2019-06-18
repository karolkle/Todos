import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Task.scss'

//import './Note.css';



class Note extends Component{ 

  
  constructor(props){
    super(props);
    this.noteContent = props.noteContent;
    this.noteId = props.noteId;
    this.category = props.category;
    this.time = props.time;
    this.state = {
      hover: true,
    }


    this.handleRemoveNote = this.handleRemoveNote.bind(this);
  }

  handleRemoveNote(id){
    this.props.removeNote(id);

  }

  handleHover() {
    this.setState({hover: !this.state.hover});
  }


  render(){

   
       /*<p className="time"> {this.time}</p>
       <span className="delete" onClick={() => this.handleRemoveNote(this.noteId)}>
      &times;
      </span>
     */

    return(
    
      <div className="Task"
      onMouseEnter={()=>this.handleHover()} 
      onMouseLeave={()=>this.handleHover()}
      
      >
        <div className="Task__up">
        <h3 className="content">{this.noteContent}</h3>
        
        { this.state.hover 
          ? <p className="time"> {this.time}</p> 
          : <button type="button" className="delete" onClick={() => this.handleRemoveNote(this.noteId)}>x</button>
          }</div>
          <div className="Task__down">
          <p className="category"> {this.category}</p></div>
        </div>
        
    );
  }
}

Note.propTypes = {
  noteContent: PropTypes.string,
  category: PropTypes.string
}

export default Note;