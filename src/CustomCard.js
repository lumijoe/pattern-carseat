// CustomCard.js
import React from 'react';

function CustomCard({ member, content, isChecked, handleCheckboxChange }) {
  return (
    <div className="col-md-4">
      {/* カードの中身 */}
      <div className={`box ${isChecked ? 'active' : ''}`}>
        {member}
      </div>
      <div className="box">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Can Drive
      </div>
      <div className={`box ${isChecked ? 'active' : ''}`}>
        {isChecked && <img src="./handle.svg" alt="" />}
      </div>
    </div>
  );
}

export default CustomCard;
