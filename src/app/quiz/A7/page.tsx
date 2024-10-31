// src/app/QuizCourseA.tsx
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import StoryComponent from '@/app/components/StoryComponent';

const QuizCourseA: React.FC = () => {
  const [, setHasParticipated] = useState<boolean | null>(null);
  const router = useRouter();

  const correctKeyword = ['国際経済'];
  const correctHint = '国際経済';

  // ストーリーと画像の配列
  const stories = [
    {
      text: '【ダンジョン進行度★★★☆】\n正解！\n\n',
      image: '/images/QA2a.jpg',
    },
    {
      text: 'バリアを壊せた！攻撃は効いているようだ！ しかし、大蛇の反撃で頭がクラクラする…。\n\n',
      image: '/images/boss.png',
    },
    {
      text: 'まずい、攻撃がくる…！\n\n',
      image: '/images/boss.png',
    },
    {
      text: 'すると、最初に見つけた魔道書が突然開き、シールドを張って守ってくれた！開かれた魔導書を見ると謎が書いてある。この謎を解いたら、魔導書の魔術を使えるかもしれない！ \n\n',
      image: '/images/boss.png',
      overlayImage: '/images/MagicBook.png',
    },
    { 
      text: '第一校舎313教室へ行って、キーワードを手に入れよう！',
      image: '/images/boss.png',
      participationStatus: true, // 修正: プロパティ名を変更
    }
  ];

  const handleParticipation = async (participated: boolean) => {
    setHasParticipated(participated);
    await fetch('/api/participation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        course: '情報コミュニケーション学部島田剛ゼミナール',
        step: participated ? 1 : 11,  // 参加時は1、参加していない場合は11
        participated: participated,
      }),
    });
  };

  const handleNext = () => {
    // ページ遷移処理
    router.push('/quiz/A8');
  };

  const participationLabel = "情報コミュニケーション学部島田剛ゼミナール"; // ここで企画名を設定
  return (
    <div style={{
      background: 'linear-gradient(to bottom, #e0bbff 50%, #add8e6 100%)',
      height: '100vh',
    }}>
      {/* ストーリーコンポーネントの呼び出し */}
      <StoryComponent
        stories={stories}
        onParticipationChange={handleParticipation}
        onParticipationConfirmed={() => console.log('参加が確認されました')}
        correctKeyword={correctKeyword}
        correctHint={correctHint}
        course="A" // courseを指定
        step={5}   // stepを指定
        onNext={handleNext} // onNext関数を渡す
        onHint={handleNext}
        participationLabel={participationLabel} // 企画名を渡す
      />
    </div>
  );
};

export default QuizCourseA;