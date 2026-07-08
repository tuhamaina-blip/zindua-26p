import React from 'react'
import { useUser } from '../context/UserContext'

function UserProfile() {
  const {name, age} = useUser();
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
    </div>
  )
}

export default UserProfile

export const Header = ({name}) => {
  return(
    <h1>Hello. My name is {name}</h1>
  )
}
