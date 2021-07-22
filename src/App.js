import React, { Component } from 'react'
import firebase from "firebase";
import Header from "./components/Header";
import Notesform from "./components/Notesform";
import Notes from "./components/Notes";

class App extends Component {

  constructor() {
    super();

    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    this.db = firebase.database();
    this.listenForChange();
  }

  listenForChange() {
    this.db.ref('notes').on('child_added', snapshot => {
      let note = {
        id: snapshot.key,
        title: snapshot.val().title,
        note: snapshot.val().note
      }

      let notes = this.state.notes;
      notes.push(note);

      this.setState({
        notes: notes
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Notesform />
          <Notes notes={this.state} />
        </main>
      </div>
    );
  }
}

export default App;
