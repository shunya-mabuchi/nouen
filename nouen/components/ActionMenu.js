// components/ActionMenu.js
function ActionMenu({ onActionSelected }) {
    return (
      <div>
        <button onClick={() => onActionSelected('耕地に変換')}>耕す</button>
        <button onClick={() => onActionSelected('草地に変換')}>草地に変換</button>
        <button onClick={() => onActionSelected('種をまく', '小麦')}>小麦の種をまく</button>
        <button onClick={() => onActionSelected('種をまく', '米')}>米の種をまく</button>
        {/* 収穫アクションボタンを追加 */}
        <button onClick={() => onActionSelected('収穫')}>収穫</button>
      </div>
    );
  }
  export default ActionMenu;