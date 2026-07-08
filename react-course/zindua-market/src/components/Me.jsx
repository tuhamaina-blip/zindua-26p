import React from 'react'

const Me = (props) => {
  return (
    <div>
      <h2>My name is {props.name}. I am {props.age} years old. I am {props.gender}.</h2>
    </div>
  )
}

export default Me
