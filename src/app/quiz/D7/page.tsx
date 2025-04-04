// src/app/QuizCourseA.tsx
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import StoryComponent from '@/app/components/StoryComponent';

const QuizCourseA: React.FC = () => {
  const [, setHasParticipated] = useState<boolean | null>(null);
  const router = useRouter();

  const correctKeyword = ['白地図','はくちず'];
  const correctHint = ['白地図','はくちず'];

  // ストーリーと画像の配列
  const stories = [
    {
      text: '【ダンジョン探索度★★★☆☆】\n正解！\n\n',
      image: '/images/B2a.jpg',
    },
    {
      text: '壁画の文字が変化し始めた。短剣が、大昔に祭具として使われていたということがわかった！\n\n',
      image: '/images/god.png',
    },
    {
      text: '短剣を飾ったら何か起こるかもしれない。短剣を土台に飾る。すると地面が揺れ始め、祭壇の裏に階段が現れた！\n\n',
      image: '/images/god.png',
    },
    {
      text: '進んでいくと、光る宝石を見つけた。もしかして、別世界に行けるという宝石だろうか？よく見ようと宝石を手に取ると…。 \n\n',
      image: '/images/cave.png',
    },
    {
      text: '宝石に吸い込まれてしまった！吸い込まれた先で目を開くと、目の前に変な石像がいる。 \n\n',
      image: '/images/SuckedRoom.png',
    },
    {
      text: '「ここから出たければ、私にバトルで勝て！」石像がバトルをしかけてきた！ \n\n',
      image: '/images/SuckedRoom.png',
    },
    { 
      text: '和泉ラーニングスクエアLS506教室へ行って、キーワードを手に入れよう！\n\n※和泉ラーニングスクエア4階とメディア棟4階は、連絡通路があります。ぜひお使いください。\n\n',
      image: '/images/SuckedRoom.png',
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
        course: '地理学研究部',
        step: participated ? 4 : 44,  // 参加時は1、参加していない場合は11
        participated: participated,
      }),
    });
  };

  const handleNext = () => {
    // ページ遷移処理
    router.push('/quiz/D8');
  };

  const participationLabel = "地理学研究部"; // ここで企画名を設定
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
        course="白地図" // courseを指定
        step={4}   // stepを指定
        onNext={handleNext} // onNext関数を渡す
        onHint={handleNext}
        participationLabel={participationLabel} // 企画名を渡す
      />
    </div>
  );
};

export default QuizCourseA;