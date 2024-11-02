// src/app/courseA12/page.tsx
"use client";

import { useRouter } from 'next/navigation';
import StoryComponentNosign from '@/app/components/StoryComponentNosign';

const Page: React.FC = () => {
  const router = useRouter();
  const correctKeyword = ['はる','春'];
  const correctHint =  ['はる','春'];

  // ストーリーのデータ
  const stories = [
    {
      text: '問題が現れた！\n\n下のフォームに答えを入力してね\n\n',
      image: '/images/B12.jpg',
      answerFormProps: true,
    }
  ];


  // ページ遷移処理
  const handleNext = (url: string) => {
    router.push(url);
  };


  const participationLabel = "";

  return (
    <div style={{
      background: 'linear-gradient(to bottom, #e0bbff 50%, #add8e6 100%)',
      height: '',
    }}>
      <StoryComponentNosign
        stories={stories}
        onParticipationChange={() => {}}
        onParticipationConfirmed={() => {}}
        correctKeyword={correctKeyword}
        correctHint={correctHint}
        course="はる" // courseを指定
        step={4}   // stepを指定
        onNext={() => handleNext('/quiz/D5')} // 正解時の遷移先を指定
        onHint={() => handleNext('/quiz/D5')} // ヒント時の遷移先を指定
        participationLabel={participationLabel} // 企画名を渡す
      />
    </div>
  );
};

export default Page;