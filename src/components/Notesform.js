import React, { Component } from 'react';
import firebase from 'firebase';

export class Notesform extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            note: ''
        }
    }

    onChangeHandler (evt, key) {
        this.setState({
            [key]: evt.target.value
        });
    }

    render() {
        return (
            <section className="noteform">
                <h3>Create New Note</h3>
                <div className="form-group">
                    <label htmlFor="noteform-title">Title</label>
                    <input 
                        type="text" 
                        id="noteform-title" 
                        name="noteform-title"
                        value={this.state.title}
                        onChange={(evt) => this.onChangeHandler(evt, 'title')}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="noteform-note">Note</label>
                    <textarea 
                        name="noteform-note" 
                        id="noteform-note"
                        value={this.state.note}
                        onChange={(evt) => this.onChangeHandler(evt, 'note')}
                    ></textarea>
                </div>
                <button>Create Note</button>
            </section>
        )
    }
}

export default Notesform;
