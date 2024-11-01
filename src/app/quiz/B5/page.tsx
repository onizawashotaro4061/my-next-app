// src/app/QuizCourseA.tsx
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import StoryComponent from '@/app/components/StoryComponent';

const QuizCourseA: React.FC = () => {
  const [, setHasParticipated] = useState<boolean | null>(null);
  const router = useRouter();

  const correctKeyword = ['マガジン','まがじん','magazine'];
  const correctHint = ['マガジン','まがじん','magazine'];

  // ストーリーと画像の配列
  const stories = [
    {
      text: '【ダンジョン探索度★★☆☆☆】\n正解！ \n\n',
      image: '/images/QB1a.jpg',
    },
    {
      text: '滝が二手に割れた！滝に近づくと、奥に人が一人通れそうな穴を見つけた。誰かに見られている気がするが、前へ進もう！ \n\n',
      image: '/images/lake.png',
    },
    {
      text: '歩いていると、怪しい祭壇と壁画を見つけた！祭壇には何かが飾られていたと思われる土台。壁画には謎が書かれている！これを解いたら何か起こるかもしれない。\n\n',
      image: '/images/god.png',
    },
    { 
      text: 'メディア棟M606教室へ行って、キーワードを手に入れよう！',
      image: '/images/god.png',
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
        course: 'フリーペーパー工房',
        step: participated ? 2 : 22,  // 参加時は1、参加していない場合は11
        participated: participated,
      }),
    });
  };

  const handleNext = () => {
    // ページ遷移処理
    router.push('/quiz/B6');
  };


  const participationLabel = "フリーペーパー工房"; // ここで企画名を設定
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
        course="マガジン" // courseを指定
        step={2}   // stepを指定
        onNext={handleNext} // onNext関数を渡す
        onHint={handleNext}
        participationLabel={participationLabel} // 企画名を渡す
      />
    </div>
  );
};

export default QuizCourseA;