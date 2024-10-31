// src/app/QuizCourseA.tsx
"use client";

import { useRouter } from 'next/navigation'; // これは正しいインポートです
import StoryComponent from '@/app/components/StoryComponent';


const QuizCourseA: React.FC = () => {
  const router = useRouter();
  const correctKeyword = 'MV';
  const correctHint = 'MV';

  // ストーリーと画像の配列
  const stories = [
    {
      text: '【ダンジョン探索度★★★★☆】正解！\n\n',
      image: '/images/QB2a.jpg',
    },
    {
      text: '石像にヒビが入った！勝てるかもしれない！しかし、疲れて頭がまわらなくなってきた…。\n\n',
      image: '/images/SuckedRoom.png',
    },
    {
      text: '「ホー、ホー…ダイジョーブ？」突然、背後からフクロウが出てきた。さっき感じた視線はコイツか…？\n\n',
      image: '/images/SuckedRoom.png',
    },
    {
      text: 'フクロウはなんと、昔石像に負けてしまい姿を変えられた冒険家だという。 \n\n',
      image: '/images/SuckedRoom.png',
    },
    { 
      text: '和泉ラーニングスクエアLS304教室へ行って、キーワードを手に入れよう！',
      image: '/images/SuckedRoom.png',
     answerFormProps: true,
    }
  ];

  const handleNext = (url: string) => {
    router.push(url);
  };

  const handleHint = (url: string) => {
    router.push(url);
  };
  const participationLabel = "総合コンテンツ制作サークル";

  return (
    <div style={{
      background: 'linear-gradient(to bottom, #e0bbff 50%, #add8e6 100%)',
      height: '100vh',
    }}>
      {/* ストーリーコンポーネントの呼び出し */}
      <StoryComponent
        stories={stories}
        onParticipationChange={() => {}}
        onParticipationConfirmed={() => {}}
        correctKeyword={correctKeyword}
        correctHint={correctHint}
        course="B" // courseを指定
        step={2}   // stepを指定
        onNext={() => handleNext('/quiz/B10')}  // onNext関数を渡す
        onHint={() => handleHint('/quiz/B10')} // ヒント時の遷移先を指定
        participationLabel={participationLabel}
      />
    </div>
  );
};

export default QuizCourseA;