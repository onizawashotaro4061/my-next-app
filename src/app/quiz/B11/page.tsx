// src/app/QuizCourseA.tsx
"use client";

import { useRouter } from 'next/navigation'; // これは正しいインポートです
import StoryComponent from '@/app/components/StoryComponent';


const QuizCourseA: React.FC = () => {
  const router = useRouter();
  const correctKeyword = ['迷Q伝説','めいきゅうでんせつ','迷宮伝説','迷Q伝説'];
  const correctHint = ['迷Q伝説','めいきゅうでんせつ','迷宮伝説','迷Q伝説'];

  // ストーリーと画像の配列
  const stories = [
    {
      text: '【ダンジョン探索度????】\n正解！\n石像が壊れた！周りが光に包まれる。\n\n',
      image: '/images/QB3a.jpg',
    },
    {
      text: '「君の旅路に祝福を…」\n\n',
      image: '/images/SuckedRoom.png',
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
      text: 'ゴール教室（メディア棟M512教室）に行って、最後のキーワードを手に入れよう！\n\n※LS4階とメディア棟4階は、連絡通路があります。ぜひお使いください。\n\n',
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
        course="迷Q伝説" // courseを指定
        step={2}   // stepを指定
        onNext={() => handleNext('/quiz/B12')}  // onNext関数を渡す
        onHint={() => handleHint('/quiz/B12')} // ヒント時の遷移先を指定
        participationLabel={participationLabel}
      />
    </div>
  );
};

export default QuizCourseA;