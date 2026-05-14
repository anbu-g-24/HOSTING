import React from 'react'
import ProfileCard from './components/profileCard'

function App() {
  return (
    <div className="container">
      <ProfileCard name="Anbu" role="Frontend Developer" />
      <ProfileCard name="Dinesh" role="Backend Developer" />
    </div>
  );
}

export default App;