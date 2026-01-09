import React from 'react'
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Profile from './components/Profile'
import Card from './components/Card'
import Counter from './components/Counter'
import Toggle from './components/Toggle'
import LoginStatus from './components/LoginStatus'
import UserRole from './components/UserRole'
import ToggleMessage from './components/ToggleMessage'
import Controlledinputs from './components/controlledinputs'
import Followers from './components/Followers'


function App() {

  const [showProfile , setShowProfile]= useState(false)
  return (
    <>
      <h1>Hello react</h1>
      <Header />

      <Profile age="21" name="Anbu" place="Chennai." />
      <Profile age="20" name="Keeru" place="Chennai." />
      
      
        <Counter />
        <Toggle />

        <UserRole/>
        <ToggleMessage/>

        <Controlledinputs/>

        <Followers/>

         

     
        


      

       

    </>
  )
}

export default App