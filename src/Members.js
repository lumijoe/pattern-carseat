// Members.js
import React, { useState, useEffect } from 'react';
import CustomCard from './CustomCard';

function Members() {
  const [isCheckedList, setIsCheckedList] = useState(Array(5).fill(false));
  // メンバーデータのステート
  const [cardData, setCardData] = useState([]); 

  const handleCheckboxChange = (index) => {
    const updatedCheckedList = [...isCheckedList];
    updatedCheckedList[index] = !updatedCheckedList[index];
    setIsCheckedList(updatedCheckedList);
  };

  // JSON(public/membersData.json)データを読み込む関数
  useEffect(() => {
    fetch('membersData.json') // JSONファイルのパスを指定
      .then((response) => response.json())
      .then((data) => setCardData(data))
      .catch((error) => console.error('データの読み込み中にエラーが発生しました: ', error));
  }, []);

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
