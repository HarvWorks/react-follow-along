import React from 'react'
import Person from './Person/Person'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

const persons = (props) => {
  if (props.showPersons) {
    return props.persons.map((person, index) => (
      <ErrorBoundary key={person.id}>
        <Person
          click={props.clicked.bind(this, index)}
          changed={(event) => props.changed(event, person.id)}
          name={person.name}
          age={person.age}/>
      </ErrorBoundary>
    ))
  }
  return null
}

export default persons;
