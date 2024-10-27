// src/app/QuizCourseA.tsx
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // これは正しいインポートです
import StoryComponent from '@/app/components/StoryComponent';

const QuizCourseA: React.FC = () => {
  const [, setHasParticipated] = useState<boolean | null>(null);
  const router = useRouter();

  const correctKeyword = '迷Q伝説';

  // ストーリーと画像の配列
  const stories = [
    {
      text: '正解\n\n',
      image: '/images/answer2.png',
    },
    {
      text: '石像が壊れた！周りが光に包まれる。「君の旅路に祝福を…」\n\n',
      image: '/images/boss.png',
    },
    {
      text: '気が付くと、吸い込まれる前の場所にいた。そこに冒険家フクロウの姿はなく、割れた宝石だけが落ちている。勝った安心感からか、だんだん眠くなってきた…。\n\n',
      image: '/images/cave.png',
    },
    {
      text: 'ここは…。目が覚めると、元いた世界のベッドの上に寝ていた。「ホー、ホー…」どこからかフクロウの鳴き声が聞こえた。 \n\n',
      image: '/images/room.jpg',
    },
    { 
      text: 'ゴール教室（メディア棟M512教室）に行って、最後のキーワードを手に入れよう！',
      image: '/images/room.jpg',
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
        course: 'B',
        step: 11,
        participated: participated,
      }),
    });
  };

  const handleNext = () => {
    // ページ遷移処理
    router.push('/quiz/courseB22');
  };

  const participationLabel = "〇〇"; // ここで企画名を設定
  return (
    <div>
      {/* ストーリーコンポーネントの呼び出し */}
      <StoryComponent
        stories={stories}
        onParticipationChange={handleParticipation}
        onParticipationConfirmed={() => console.log('参加が確認されました')}
        correctKeyword={correctKeyword}
        course="B" // courseを指定
        step={11}   // stepを指定
        onNext={handleNext} // onNext関数を渡す
        participationLabel={participationLabel} // 企画名を渡す
      />
    </div>
  );
};

export default QuizCourseA;
