// src/app/QuizCourseA.tsx
"use client";

import { useRouter } from 'next/navigation'; // これは正しいインポートです
import StoryComponent from '@/app/components/StoryComponent';


const QuizCourseA: React.FC = () => {
  const router = useRouter();
  const correctKeyword = '迷Q伝説';
  const correctHint = '迷Q伝説';

  // ストーリーと画像の配列
  const stories = [
    {
      text: '正解\n\n',
      image: '/images/QA2a.jpg',
    },
    {
      text: '魔導書に文字が浮かび上がった。ここに書かれているのは…。「雄大なる氷の精霊にして天を潤わせし氷帝よ！」そう唱えると、魔導書は魔術を放ち大蛇を凍らせた。\n\n',
      image: '/images/boss.png',
      overlayImage: '/images/MagicBook.png',
    },
    {
      text: '大蛇に勝てたようだ！勝った安心感からか、だんだん眠くなってきた…。\n\n',
      image: '/images/boss.png',
    },
    {
      text: 'ここは…。目が覚めると、元いた世界のベッドの上に寝ていた。なんだ、あれは夢だったのか。 \n\n',
      image: '/images/room.jpg',
    },
    { 
      text: 'ゴール教室（メディア棟M512教室）に行って、最後のキーワードを手に入れよう！',
      image: '/images/room.jpg',
     answerFormProps: true,
    }
  ];

  const handleNext = (url: string) => {
    router.push(url);
  };

  const handleHint = (url: string) => {
    router.push(url);
  };
  const participationLabel = "模型部";

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
        course="A" // courseを指定
        step={2}   // stepを指定
        onNext={() => handleNext('/quiz/courseA20')}  // onNext関数を渡す
        onHint={() => handleHint('/quiz/courseA20')} // ヒント時の遷移先を指定
        participationLabel={participationLabel}
      />
    </div>
  );
};

export default QuizCourseA;