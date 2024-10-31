// src/app/courseA12/page.tsx
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import StoryComponentNosign from '@/app/components/StoryComponentNosign';

const Page: React.FC = () => {
  const [, setHasParticipated] = useState<boolean | null>(null);
  const router = useRouter();

  const correctKeyword = 'はる';
  const correctHint = '師匠';

  // ストーリーのデータ
  const stories = [
    {
      text: '問題が現れた！ヒントがほしい人は第一校舎314教室へ行って、キーワードを手に入れよう！\n\n下のフォームに答えかヒントのキーワードを入力してね\n\n',
      image: '/images/B1.jpg',
      answerFormProps: true,
    }
  ];


  // ページ遷移処理
  const handleNext = (url: string) => {
    router.push(url);
  };

  const handleHint = (url: string) => {
    router.push(url);
  };

  const participationLabel = "あ";

  return (
    <div style={{
      background: 'linear-gradient(to bottom, #e0bbff 50%, #add8e6 100%)',
      height: '100vh',
    }}>
      <StoryComponentNosign
        stories={stories}
        onParticipationChange={() => {}}
        onParticipationConfirmed={() => {}}
        correctKeyword={correctKeyword}
        correctHint={correctHint}
        course="B" // courseを指定
        step={2}   // stepを指定
        onNext={() => handleNext('/quiz/B3')} // 正解時の遷移先を指定
        onHint={() => handleHint('/hint/B3')} // ヒント時の遷移先を指定
        participationLabel={participationLabel} // 企画名を渡す
      />
    </div>
  );
};

export default Page;