// src/app/QuizCourseA.tsx
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // これは正しいインポートです
import StoryComponent from '@/app/components/StoryComponent';


const QuizCourseA: React.FC = () => {
  const [, setHasParticipated] = useState<boolean | null>(null);
  const router = useRouter();
  const correctKeyword = ['プラモデル','ぷらもでる'];
  const correctHint = ['プラモデル','ぷらもでる'];

  // ストーリーと画像の配列
  const stories = [
    {
      text: '【ダンジョン探索度★★★★☆】正解！\n\n',
      image: '/images/QD2a.jpg',
    },
    {
      text: '石像にヒビが入った！勝てるかもしれない！しかし、疲れて頭がまわらなくなってきた…。\n\n',
      image: '/images/SuckedRoom.png',
    },
    {
      text: '「ホー、ホー…ダイジョーブ？」突然、背後からフクロウが出てきた。さっき感じた視線はコイツか…？\n\n',
      image: '/images/SuckedRoom.png',
    },
    {
      text: 'フクロウはなんと、昔石像に負けてしまい姿を変えられた冒険家だという。 \n\n',
      image: '/images/SuckedRoom.png',
    },
    { 
      text: '和泉ラーニングスクエアLS302教室へ行って、キーワードを手に入れよう！',
      image: '/images/SuckedRoom.png',
     participationStatus: true,
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
        course: '模型部',
        step: participated ? 4 : 44,  // 参加時は1、参加していない場合は11
        participated: participated,
      }),
    });
  };
  const handleNext = (url: string) => {
    router.push(url);
  };

  const handleHint = (url: string) => {
    router.push(url);
  };
  const participationLabel = "模型部";

  return (
    <div style={{
      background: 'linear-gradient(to bottom, #e0bbff 50%, #add8e6 100%)',
      height: '',
    }}>
      {/* ストーリーコンポーネントの呼び出し */}
      <StoryComponent
        stories={stories}
        onParticipationChange={handleParticipation}
        onParticipationConfirmed={() => console.log('参加が確認されました')}
        correctKeyword={correctKeyword}
        correctHint={correctHint}
        course="プラモデル" // courseを指定
        step={2}   // stepを指定
        onNext={() => handleNext('/quiz/D10')}  // onNext関数を渡す
        onHint={() => handleHint('/quiz/D10')} // ヒント時の遷移先を指定
        participationLabel={participationLabel}
      />
    </div>
  );
};

export default QuizCourseA;