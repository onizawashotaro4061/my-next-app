// src/app/QuizCourseA.tsx
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import StoryComponent from '@/app/components/StoryComponent';

interface Story {
  text: string;
  image: string;
  overlayImage?: string;
  participationStatus?: boolean;
}

const QuizCourseA: React.FC = () => {
  const [, setHasParticipated] = useState<boolean | null>(null);
  const router = useRouter();

  const correctKeyword = ['ことゆめ','詩夢','コトユメ'];
  const correctHint = ['ことゆめ','詩夢','コトユメ'];

  // ストーリーと画像の配列
  const stories: Story[] = [
    {
      text: '答えを入力しよう！\n\n',
      image: '/images/A1h.jpg',
      participationStatus: true,
    },
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
        step: participated ? 1 : 11,  // 参加時は1、参加していない場合は11
        participated: participated,
      }),
    });
  };

  const handleNext = (url: string) => {
    // 動的に指定されたURLにページ遷移
    router.push(url);
  };

  const participationLabel = "模型部"; // ここで企画名を設定

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
        course="ヒント：ことゆめ" // courseを指定
        step={1}   // stepを指定
        onNext={() => handleNext('/quiz/A3')} 
        onHint={() => handleNext('/quiz/A3')} // 正しいページ遷移を指定
        participationLabel={participationLabel} // 企画名を渡す
      />
    </div>
  );
};

export default QuizCourseA;