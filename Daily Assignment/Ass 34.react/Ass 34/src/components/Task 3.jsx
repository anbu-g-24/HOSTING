import React from 'react'

function Profile(props) {
  return (
    <div>
        <h3> Name: Anbu</h3>
        <p>Age:{props.Age} </p>
    </div>
  )
}

export default Profile;