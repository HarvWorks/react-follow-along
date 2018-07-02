import React from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {
  const assignedClasses = [];
  let buttonClass = "";

  if (props.showPersons) {
    buttonClass = classes.Red
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red)
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold)
  }
  return (
    <div>
      <h1>Hi, I am a React App!</h1>
      <p className={assignedClasses.join(" ")}>This is a person:</p>
      <button className = {buttonClass}
        onClick={props.clicked}>
        Toggle persons
        </button>
      {/*anonymous functions inside onClick is not as good as bind */}
    </div>
  )
}

export default cockpit;
