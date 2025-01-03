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

  const correctKeyword = ['留学生','りゅうがくせい'];
  const correctHint = ['留学生','りゅうがくせい'];

  // ストーリーと画像の配列
  const stories: Story[] = [
    {
      text: 'どこからか鳴き声が聞こえる…。「ホー、ホー…」何かはわからないが、そろそろ起きよう。\n\n',
      image: '/images/white_w_trans.png',
    },
    {
      text: '目が覚めたら異世界の知らない王国にいた。そこで、「別世界へ行ける宝石が迷宮にある」という噂が聞こえてきた。 \n\n',
      image: '/images/king.png',
    },
    {
      text: 'その宝石を手に入れれば、元の世界に戻れるかもしれない！装備を整えて、いざ、迷宮へ！\n\n',
      image: '/images/king.png',
    },
    {
      text: 'ここは古代遺跡のようだ。潜り始めて少ししたところで、ゴブリンたちが襲ってきた！体に力がみなぎり、ゴブリンを倒した！',
      image: '/images/cave.png',
    },
    {
      text: '奥へ進むと、宝箱を見つけた！宝箱にはギミックがあるようだ。ギミックを解いて宝箱を開けよう！',
      image: '/images/CaveChest.png',
    },
    {
      text: '第一校舎306教室へ行って、キーワードを手に入れよう！',
      image: '/images/CaveChest.png',
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
        course: '教養英語会Meicom',
        step: participated ? 4 : 44,  // 参加時は1、参加していない場合は11
        participated: participated,
      }),
    });
  };

  const handleNext = (url: string) => {
    // 動的に指定されたURLにページ遷移
    router.push(url);
  };

  const participationLabel = "教養英語会Meicom"; // ここで企画名を設定

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
        course="留学生" // courseを指定
        step={4}   // stepを指定
        onNext={() => handleNext('/quiz/D2')} 
        onHint={() => handleNext('/quiz/D2')} 
        participationLabel={participationLabel} // 企画名を渡す
      />
    </div>
  );
};

export default QuizCourseA;