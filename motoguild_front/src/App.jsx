import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [allUsers, setAllUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

useEffect(() => {

  async function getUsers() {
    try{
      const res = await fetch('https://localhost:3333/api/user')
      const data = await res.json()
      setAllUsers(data)
      setIsLoading(false)
    }
    catch(error){
      console.log(error)
    }
    
      
  }
  getUsers()
}, [])

  return (
    <div className="App">
      <h1>Get 1st user</h1>
      <p>{!isLoading && `${allUsers[0].userName}`}</p>
    </div>
  )
}

export default App
