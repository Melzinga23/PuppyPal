import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { puppyList } from './data'

function App() {
  const [count, setCount] = useState(0)
  const [puppies, setPuppies] = useState(puppyList)


const [featPupId, setFeatPupId] = useState(null)
const featuredPup = puppies.find((pup)=> pup.id === featPupId)
const handleClick = (id)=>{
  setFeatPupId(id)
}

  return (
    <div>
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      { puppies.map((puppy) => {
     return <p onClick = {() => handleClick(puppy.id)} key={puppy.id}>{puppy.name}</p>
   })}
    </div>
  )
}

export default App
