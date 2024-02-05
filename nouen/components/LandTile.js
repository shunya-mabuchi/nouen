// components/LandTile.js
import React, { useState, useEffect } from 'react';

function LandTile({ land, onToggle }) {
  const [currentLand, setCurrentLand] = useState(land);

  // 土地の成長サイクルを管理
  useEffect(() => {
    let timer;
    if (currentLand.growthStage === '播種') {
      timer = setTimeout(() => {
        setCurrentLand(current => ({...current, growthStage: '双葉'}));
      }, 10000); // 10秒後に成長
    } else if (currentLand.growthStage === '双葉') {
      timer = setTimeout(() => {
        setCurrentLand(current => ({...current, growthStage: '成長中'}));
      }, 10000); // 更に10秒後に成長
    } else if (currentLand.growthStage === '成長中') {
      timer = setTimeout(() => {
        setCurrentLand(current => ({...current, growthStage: '収穫可能'}));
      }, 10000); // 更に10秒後に成長
    }
    return () => clearTimeout(timer);
  }, [currentLand]);

  useEffect(() => {
    setCurrentLand(land);
  }, [land]);

// 成長段階と作物の種類に基づいて画像URLを選択
let imageSrc, displayCount;
  // 倉庫マスの処理を追加
  if (currentLand.type === '倉庫') {
    imageSrc = '/box.png'; // 倉庫の画像
    displayCount = `${currentLand.crop}: ${currentLand.count}`;
  } else if (currentLand.type === '草地') {
    imageSrc = '/kusachi.png';
  } else if (currentLand.type === '耕地') {
    switch(currentLand.growthStage) {
      case '播種': imageSrc = currentLand.crop === '小麦' ? '/hashu.png' : '/hashu.png'; break;
      case '双葉': imageSrc = currentLand.crop === '小麦' ? '/hatsuga.png' : '/hatsuga.png'; break;
      case '成長中': imageSrc = currentLand.crop === '小麦' ? '/grow_wheat.png' : '/grow_rice.png'; break;
      case '収穫可能': imageSrc = currentLand.crop === '小麦' ? '/harvest_wheat.png' : '/harvest_rice.png'; break;
      default: imageSrc = '/kochi.png'; // 初期耕地の画像
    }
  } else {
    imageSrc = '/arechi.png'; // デフォルトまたは荒地の場合
  }

  const landStyle = {
    width: '100px',
    height: '100px',
    border: '1px solid black',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(${imageSrc})`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    position: 'relative',
  };

  return (
    <div style={landStyle} onClick={() => onToggle(currentLand)}>
      {currentLand.type === '倉庫' && (
        <div style={{ position: 'absolute', bottom: 0, backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
          {displayCount}
        </div>
      )}
    </div>
  );
}
export default LandTile;