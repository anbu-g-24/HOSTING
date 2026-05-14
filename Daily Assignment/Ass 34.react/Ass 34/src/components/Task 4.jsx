import React from 'react'

function Card (props) {
  return (
    <div className='Card'>
        {props.children}

        <p>Title: {props.title}</p>

    </div>
  );
}

export default Card;