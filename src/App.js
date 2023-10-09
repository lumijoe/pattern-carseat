// App.js

import React, { useState } from 'react';
import './App.css';
import Header from './Header'; // Headerコンポーネントをインポート
import Members from './Members'; // Membersコンポーネントをインポート
import Footer from './Footer'; // Footerコンポーネントをインポート
import Pattern from './Pattern';

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
      <Members onUpdateCandrive={updateCandrive} /> {/* MembersコンポーネントにupdateCandrive関数を渡す */}
      <Pattern candrive={candrive} isChecked={true} />
      <Footer />
    </div>
  );
}

export default App;
