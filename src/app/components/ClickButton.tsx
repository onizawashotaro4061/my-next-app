"use client";
import { useState } from 'react';

const ClickButton = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = async () => {
    try {
      const response = await fetch('/api/click', { // エンドポイントの確認
        method: 'POST',
      });

      if (response.ok) {
        setClickCount(clickCount + 1);
      } else {
        console.error('クリック数の記録に失敗しました。');
      }
    } catch (error) {
      console.error('エラー:', error);
    }
  };

  return (
    <button onClick={handleClick}>
      クリック数: {clickCount}
    </button>
  );
};

export default ClickButton;
