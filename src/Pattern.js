import React, { useState } from 'react';

function Pattern({ candrive, isChecked }) {
  // メンバーと着順のリスト
  const members = ['A', 'B', 'C', 'D', 'E'];
  const seats = [1, 2, 3, 4, 5];

  // パターン数と計算結果を格納するステート
  const [patternCount, setPatternCount] = useState(0);
  const [patterns, setPatterns] = useState([]);

  // パターンを計算する関数
  const calculatePatterns = () => {
    // 1席目（運転席）の選択に基づいて計算
    const result = [];

    if (isChecked) {
      for (let b = 1; b <= 5; b++) {
        if (b === 1) continue; // bが1席目の場合はスキップ

        for (let c = 1; c <= 5; c++) {
          if (c === 1 || c === b) continue; // cが1席目または2席目の場合はスキップ

          for (let d = 1; d <= 5; d++) {
            if (d === 1 || d === b || d === c) continue; // dが1、2、または3の場合はスキップ

            for (let e = 1; e <= 5; e++) {
              if (e === 1 || e === b || e === c || e === d) continue; // eが1、2、3、または4の場合はスキップ

              result.push([1, b, c, d, e]);
            }
          }
        }
      }
    }

    // パターン数と計算結果を設定
    setPatternCount(result.length);
    setPatterns(result);
    console.log(result);
  };

  return (
    <div>
      <button
        onClick={calculatePatterns}
        style={{
          borderRadius: '9999px',
          padding: '3px 23px 3px 23px',
          background: 'black',
          color: 'white',
          margin: '30px',
        }}>
        計算する
      </button>
      {patternCount > 0 && (
        <div>
          <p>座り方のパターン数: {patternCount}</p>
          <table>
            <thead>
              <tr>
                <th>運転席</th>
                <th>助手席</th>
                <th>3席目</th>
                <th>4席目</th>
                <th>5席目</th>
              </tr>
            </thead>
            <tbody>
              {patterns.map((pattern, index) => (
                <tr key={index}>
                  {pattern.map((seat, seatIndex) => (
                    <td key={seatIndex}>{members[seat - 1]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Pattern;