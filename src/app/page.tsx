"use client";

import ClickButton from './components/ClickButton'; // ClickButton コンポーネントをインポート

const HomePage = () => {
  return (
    <div>
      <h1>ボタンのクリック数を数えよう</h1>
      <ClickButton /> {/* ClickButton コンポーネントを表示 */}
    </div>
  );
};

export default HomePage;
