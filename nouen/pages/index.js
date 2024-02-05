import React, { useState, useEffect } from 'react';
import LandTile from '../components/LandTile';
import ActionMenu from '../components/ActionMenu';

export default function Home() {
  const initialLandState = {
    type: '荒地',
    crop: null,
    growthStage: '未播種',
  };

  const [warehouse, setWarehouse] = useState({
    米: 0,
    米の種: 0,
    小麦: 0,
    小麦の種: 0,
  });

  useEffect(() => {
    console.log("Warehouse state updated:", warehouse);
  }, [warehouse]);


  const [lands, setLands] = useState([
    ...new Array(80).fill({ ...initialLandState }),
    { type: '倉庫', crop: '米', count: warehouse['米'] },
    { type: '倉庫', crop: '米の種', count: warehouse['米の種'] },
    { type: '倉庫', crop: '小麦', count: warehouse['小麦'] },
    { type: '倉庫', crop: '小麦の種', count: warehouse['小麦の種'] },
  ]);

  const [selectedAction, setSelectedAction] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setLands(currentLands => currentLands.map(land => {
        if (land.type === '耕地' && land.crop !== null) {
          let newGrowthStage = land.growthStage;
          switch (land.growthStage) {
            case '未播種':
              newGrowthStage = '播種';
              break;
            case '播種':
              newGrowthStage = '双葉';
              break;
            case '双葉':
              newGrowthStage = '成長中';
              break;
            case '成長中':
              newGrowthStage = '収穫可能';
              break;
            default:
              break;
          }
          return { ...land, growthStage: newGrowthStage };
        }
        return land;
      }));
    }, 10000); // 10秒ごとに成長サイクルを更新

    return () => clearInterval(interval);
  }, []);

  const handleLandClick = (index) => {
    console.log(`Land clicked at index: ${index}, selectedAction:`, selectedAction);

    const land = lands[index];
    console.log(`Land state before action:`, land);
  
    // 選択されたアクションが収穫の場合、かつ土地が収穫可能な場合に収穫処理を実行
    if (selectedAction && selectedAction.action === '収穫' && land.growthStage === '収穫可能') {
      console.log(`Harvesting land at index: ${index}`);
      harvest(index);
    } else if (selectedAction && selectedAction.action !== '収穫') {
      // 他のアクションが選択されている場合、それに応じた処理を実行
      console.log(`Applying action '${selectedAction.action}' to land at index: ${index}`);
      toggleLandType(index);
    }
  };
  
  const handleActionSelected = (action, cropType) => {
    setSelectedAction({ action, cropType });
  };

  const toggleLandType = (index) => {
    const updatedLands = lands.map((land, i) => {
      if (i === index) {
        let newLand = { ...land };
        if (selectedAction.action === '耕地に変換' && (land.type === '荒地' || land.type === '草地')) {
          newLand = { ...initialLandState, type: '耕地' };
        } else if (selectedAction.action === '草地に変換' && land.type === '耕地') {
          newLand = { ...initialLandState, type: '草地' };
        } else if (selectedAction.action === '種をまく' && land.type === '耕地' && land.growthStage === '未播種') {
          newLand.crop = selectedAction.cropType;
          newLand.growthStage = '播種';
        }
        return newLand;
      }
      return land;
    });

    setLands(updatedLands);
  };

  const harvest = (index) => {
    const land = lands[index];
    console.log(`Harvesting process started for land at index: ${index}`, land);

    if (land.growthStage === '収穫可能') {
      // 作物とその種のカウントを増やす
      console.log("Warehouse state before harvest:", warehouse);

      const update = {
        [land.crop]: warehouse[land.crop] + 1,
        [`${land.crop}の種`]: warehouse[`${land.crop}の種`] + 1,
      };
  
      setWarehouse(prev => {
        console.log("Updating warehouse state for harvest:", update);
        return { ...prev, ...update };
      });
      
      console.log(`Resetting land at index: ${index} to tillable land after harvest.`);
      // 土地を耕地にリセット
      setLands(currentLands => currentLands.map((l, idx) => idx === index ? { ...initialLandState, type: '耕地' } : l));
    }
    console.log("Lands state after updating warehouse count:", lands);
  };
  return (
    <div>
      <ActionMenu onActionSelected={handleActionSelected} />
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
        {lands.map((land, index) => (
          <LandTile key={index} land={land} onToggle={() => handleLandClick(index)} />
        ))}
      </div>
    </div>
  );
}