// src/app/click-counter/page.tsx
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ClickButton from '../components/ClickButton';
import Image from 'next/image';

const ClickCounterPage: React.FC = () => {
  const [clickCounts, setClickCounts] = useState<number[]>([0, 0]); // AコースとBコースのカウント
  const router = useRouter();

  const handleClickA = async () => {
    const newCounts = [...clickCounts];
    newCounts[0] += 1;
    setClickCounts(newCounts);
    router.push('/quiz/A1');
  };

  const handleClickB = async () => {
    const newCounts = [...clickCounts];
    newCounts[1] += 1;
    setClickCounts(newCounts);
    router.push('/quiz/B1');
  };

  return (
   <div style={{ 
    textAlign: 'center', 
    background: 'linear-gradient(to bottom, #87CEFA, #DDA0DD 40%, #DDA0DD 60%, #87CEFA)', 
    padding: '20px', 
    height: '100vh',
    }}>
      {/* ページ上部の画像 */}
       <Image src="/images/logo_transparent.png" 
       width={300}
       height={300}
       alt="Example Image" style={{
          width: '100%',
          height: 'auto',
          marginBottom: '20px' }} />
          <p style={{ 
        marginBottom: '10px',
        color: 'black',
        fontSize: '20px',
        }}>魔術師：【閉ざされた氷の魔導書】</p>
          <p style={{ 
        marginBottom: '20px',
        color: 'black',
        fontSize: '20px',
        }}>冒険家：【フクロウと呪いの宝石】</p>
    <h1 style={{ 
        marginBottom: '20px',
        color: 'black',
        fontSize: '20px',
        }}>あなたがなりたい職業を選んでね！</h1>
      {/* ボタンの配置 */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        justifyContent: 'center',
        width: '100%',
        marginBottom: '20px',
        borderRadius: '5px',
        }}>
        <ClickButton onClick={handleClickA} count={clickCounts[0]} label="魔術師" color="red"  />
        <ClickButton onClick={handleClickB} count={clickCounts[1]} label="冒険家" color="blue" />
      </div>
    </div>
  );
};

export default ClickCounterPage;
