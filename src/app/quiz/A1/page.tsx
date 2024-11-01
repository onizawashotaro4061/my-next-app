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

  const correctKeyword = ['白地図','はくちず'];
  const correctHint = ['白地図','はくちず'];
   

  // ストーリーと画像の配列
  const stories: Story[] = [
    {
      text: 'どこからか声が聞こえる…。「雄大なる氷の精霊――」何かはわからないが、そろそろ起きよう。\n\n',
      image: '/images/white_w_trans.png',
    },
    {
      text: '目が覚めたら、異世界の知らない王国の宿にいた。とりあえず街へ出たところ、「別世界へ行けるアイテムが迷宮にある」という噂を聞いた。そのアイテムを手に入れれば、元の世界へ戻れるかもしれない！魔術を覚えて、装備を整えて、いざ、迷宮へ！ \n\n',
      image: '/images/king.png',
    },
    {
      text: '迷宮に到着した。少し進むと、目の前に大きなスライムが現れた！',
      image: '/images/cave.png',
    },
    {
      text: '街で覚えた氷の魔術でスライムを倒して、宝箱をゲットした！',
      image: '/images/CaveChest.png',
    },
    {
      text: 'しかし、宝箱には謎の魔法がかかっているようだ。問題を解いて宝箱を開けよう！',
      image: '/images/CaveChest.png',
    },
    {
      text: '和泉ラーニングスクエアLS506教室へ行って、キーワードを手に入れよう！',
      image: '/images/CaveChest.png',
      participationStatus: true,
    }
  ];

  // participation count
  const handleParticipation = async (participated: boolean) => {
    setHasParticipated(participated);
    await fetch('/api/participation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        course: '地理学研究部',
        step: participated ? 1 : 11,  // 参加時は1、参加していない場合は11
        participated: participated,
      }),
    });
  };

  const handleNext = (url: string) => {
    // 動的に指定されたURLにページ遷移
    router.push(url);
  };

  const participationLabel = "地理学研究部"; // ここで企画名を設定

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
        course="C" // courseを指定
        step={1}   // stepを指定
        onNext={() => handleNext('/quiz/A2')} 
        onHint={() => handleNext('/quiz/A2')} 
        participationLabel={participationLabel} // 企画名を渡す
      />
    </div>
  );
};

export default QuizCourseA;