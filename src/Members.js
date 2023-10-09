// Members.js
import React, { useState } from 'react';
import CustomCard from './CustomCard';

function Members() {
  const [isCheckedList, setIsCheckedList] = useState(Array(5).fill(false));

  const handleCheckboxChange = (index) => {
    const updatedCheckedList = [...isCheckedList];
    updatedCheckedList[index] = !updatedCheckedList[index];
    setIsCheckedList(updatedCheckedList);
  };

  // カードのデータの定義
  const cardData = [
    { member: 'Aさん', content: 'This is member A' },
    { member: 'Bさん', content: 'This is member B' },
    { member: 'Cさん', content: 'This is member C' },
    { member: 'Dさん', content: 'This is member D' },
    { member: 'Eさん', content: 'This is member E' },
  ];

  return (
    <main>
      <div className="container">
        {cardData.map((data, index) => (
          <div className="row" key={index}>
            <CustomCard
              member={data.member}
              content={data.content}
              isChecked={isCheckedList[index]}
              handleCheckboxChange={() => handleCheckboxChange(index)}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Members;
