// App.js

import React, { useState } from 'react';
import './App.css';
import Header from './Header';     // Headerトをインポート
import Members from './Members';   // Membersをインポート
import Footer from './Footer';     // Footerをインポート
import Pattern from './Pattern';   // Ptternをインポート
import Candrive from './Candrive'; // Candriveをインポート
import Gallery from './Gallery';   // Galleryをインポート


function App() {
  const [candrive, setCandrive] = useState([]); // 運転できる人のリスト
   // パターン数のステート

  // Members コンポーネントから運転できる人の情報を取得し、candrive ステートを更新する関数
  const updateCandrive = (candriveList) => {
    setCandrive(candriveList);
  };

  return (
    <div className="App">
      <Header /> {/* Headerコンポーネントを表示 */}
      <Gallery />
      <Candrive candrive={candrive} />
      <Members onUpdateCandrive={updateCandrive} /> {/* MembersコンポーネントにupdateCandrive関数を渡す */}
      <Pattern candrive={candrive} isChecked={true} />
      <Footer />
    </div>
  );
}

export default App;
