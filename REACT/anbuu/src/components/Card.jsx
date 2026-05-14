import React from 'react';

function Cardes({ title, description }) {
  return (
    <div style={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}   

export default Cardes
