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
import Follower from './components/Follower'
import Timer from './components/Timer'
import DataCountdown from './components/Datacountdown'



function App() {

  const [showProfile , setShowProfile]= useState(false)
  return (
<<<<<<< HEAD

    <>
      <h1>Hello React</h1>
      <Header />

      <Profile age="21" name="Anbu" place="Chennai." />
      <Profile age="20" name="Keeru" place="Chennai." />
      <Profile name="Anbarasu" age="22" place="Tiruvannamalai" />
        <Counter />
        <Toggle />
=======
    // <>
    //   <h1>Hello react</h1>
    //   <Header />

    //   <Profile age="21" name="Anbu" place="Chennai." />
    //   <Profile age="20" name="Keeru" place="Chennai." />
      
      
    //     <Counter />
    //     <Toggle />
>>>>>>> 7a073a42f98178917bd8e4315318d8267539306a

    //     <UserRole/>
    //     <ToggleMessage/>

    //     <Controlledinputs/>

    //     <Followers/>

<<<<<<< HEAD
        <Follower/>
        <Timer/>

        <DataCountdown/>
    </>

    
=======
    //     <Follower/>
    //     <Timer/>

    //     <DataCountdown/>
    // </>

      <>
      <nav className="navbar">
        <div>

        </div>

      </nav>

      <Routes>
        <Route>
          
        </Route>
      </Routes>
      </>
>>>>>>> 7a073a42f98178917bd8e4315318d8267539306a



  )
}

export default App




//  <>
//       <nav className="navbar">
//         <div>

//         </div>

//       </nav>

//       <Routes>
//         <Route>
          
//         </Route>
//       </Routes>
//       </>