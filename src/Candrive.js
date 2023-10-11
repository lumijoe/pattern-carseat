//Candrive.js
import React from 'react';

function Candrive({ candrive }) {
  return (
    <div className="candrive mb-3">
      <strong>運転できる人にチェック</strong> {candrive.join(', ')}
    </div>
  );
}

export default Candrive;
