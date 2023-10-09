//Candrive.js
import React from 'react';

function Candrive({ candrive }) {
  return (
    <div className="candrive">
      <strong>運転できる人:</strong> {candrive.join(', ')}
    </div>
  );
}

export default Candrive;
