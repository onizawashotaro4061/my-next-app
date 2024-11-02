// src/app/courseA12/page.tsx
"use client";

import { useRouter } from 'next/navigation';
import StoryComponentNosign from '@/app/components/StoryComponentNosign';

const Page: React.FC = () => {
  const router = useRouter();
  const correctKeyword = ['めいだいさい','明大祭'];
  const correctHint = ['スナイパー','すないぱー'];

  // ストーリーのデータ
  const stories = [
    {
      text: '問題が現れた！ヒントが欲しい人はメディア棟M513教室へ行って、キーワードを手に入れよう！\n\n下のフォームに答えかヒントのキーワードを入力してね\n\n',
      image: '/images/B2.jpg',
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

  const participationLabel = "フリーペーパー工房";

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
        course="めいだいさい" // courseを指定
        step={2}   // stepを指定
        onNext={() => handleNext('/quiz/B7')} // 正解時の遷移先を指定
        onHint={() => handleHint('/hint/B7')} // ヒント時の遷移先を指定
        participationLabel={participationLabel}
      />
    </div>
  );
};

export default Page;