// src/app/courseA12/page.tsx
"use client";

import { useRouter } from 'next/navigation';
import StoryComponentNosign from '@/app/components/StoryComponentNosign';

const Page: React.FC = () => {
  const router = useRouter();
  const correctKeyword = ['mage','MAGE','Mage'];
  const correctHint = ['サポーター','supporter'];

  // ストーリーのデータ
  const stories = [
    {
      text: '問題が現れた！ヒントが欲しい人は第一校舎404教室へ行って、キーワードを手に入れよう！！\n\n下のフォームに答えかヒントのキーワードを入力してね\n\n',
      image: '/images/A2.jpg',
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
        course="mage" // courseを指定
        step={3}   // stepを指定
        onNext={() => handleNext('/quiz/C7')} // 正解時の遷移先を指定
        onHint={() => handleNext('/hint/C7')} // ヒント時の遷移先を指定
        participationLabel={participationLabel}
      />
    </div>
  );
};

export default Page;