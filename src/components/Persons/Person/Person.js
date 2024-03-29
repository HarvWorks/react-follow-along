import React from 'react'
import classes from './Person.css'

const person = (props) => (
  <div className={classes.person}>
      <p onClick={props.click}>I am {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
  </div>
);

export default person;
