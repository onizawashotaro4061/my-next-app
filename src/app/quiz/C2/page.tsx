// src/app/courseA12/page.tsx
"use client";

import { useRouter } from 'next/navigation';
import StoryComponentNosign from '@/app/components/StoryComponentNosign';

const Page: React.FC = () => {
  const router = useRouter();
  const correctKeyword = ['ことゆめ','詩夢','コトユメ'];
  const correctHint = ['ことゆめ','詩夢','コトユメ'];

  // ストーリーのデータ
  const stories = [
    {
      text: '問題が現れた！\n\n下のフォームに答えを入力してね\n\n',
      image: '/images/A12.jpg',
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
        course="ことゆめ" // courseを指定
        step={3}   // stepを指定
        onNext={() => handleNext('/quiz/C3')} // 正解時の遷移先を指定
        onHint={() => handleNext('/quiz/C3')} // ヒント時の遷移先を指定
        participationLabel={participationLabel} // 企画名を渡す
      />
    </div>
  );
};

export default Page;