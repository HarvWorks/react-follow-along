import React, { Component } from 'react';
import Person from './Person/Person';
import classes from './App.css';
import './Person/Person.css';

class App extends Component {
  state = {
    persons: [
      { id:'bossy-1', name: "Janice", age: 24 },
      { id:'bossy-2', name: "Harvey", age: 27 },
      { id:'bossy-3', name: "Thibault", age: 31 },
      { id:'bossy-4', name: "Eric", age: 27 }
    ],
    showPersons: false,
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person
              click={this.deletePersonHandler.bind(this, index)}
              changed={(event) => this.nameChangeHandler(event, person.id)}
              name={person.name}
              age={person.age}
              key={person.id}/>
          })}
        </div>
      )
      style.backgroundColor = "red";
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red)
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }


    return (
      <div className={classes.App}>
        <h1>Hi, I am a React App!</h1>
        <p className={assignedClasses.join(" ")}>This is a person:</p>
        <button style = {style}
          onClick={this.togglePersonHandler}>
          Toggle persons
          </button>
        {/*anonymous functions inside onClick is not as good as bind */}
        {persons}
      </div>
    );
  }
}

export default App;
