"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import StoryComponent from '@/app/components/StoryComponent';

const QuizCourseA: React.FC = () => {
  const [, setHasParticipated] = useState<boolean | null>(null);
  const router = useRouter();

  const correctKeyword = ['読み聞かせ','よみきかせ','よみ聞かせ','読みきかせ'];
  const correctHint = ['読み聞かせ','よみきかせ','よみ聞かせ','読みきかせ'];
  // ひらがなも追加する

  const stories = [
    {
      text: '【ダンジョン進行度★☆☆☆】\n正解！ \n\n',
      image: '/images/A1a.jpg',
    },
    {
      text: '宝箱が開いた！中から謎の魔導書が出てきた。強い魔術が書かれていそうだ。しかし、固く閉ざされていて開かない！とりあえず先に進もう。 \n\n',
      image: '/images/CaveBook.png',
    },
    {
      text: '歩いていると、誰かが住んでいたような部屋を見つけた。\n\n',
      image: '/images/MagicRoom.png',
    },
    {
      text: '何かないか探してみると、魔術の威力を上げる杖を見つけた！しかし、杖は封印されているようだ。封印を解くために謎を解こう！\n\n',
      image: '/images/RoomWand.png',
    },
    {
      text: 'メディア棟M516教室へ行って、キーワードを手に入れよう！\n\n※和泉ラーニングスクエア4階とメディア棟4階は、連絡通路があります。ぜひお使いください。\n\n',
      image: '/images/RoomWand.png',
      participationStatus: true,
    },
  ];

  const handleParticipation = async (participated: boolean) => {
    setHasParticipated(participated);
    await fetch('/api/participation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        course: '絵本工房',
        step: participated ? 1 : 11,  // 参加時は1、参加していない場合は11
        participated: participated,
      }),
    });
  };

  const handleNext = async () => {
    // キーワードを Supabase に記録
    await fetch('/api/keyword-attempt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        course: 'A', // コース名を指定
        step: 3, // ステップを指定
      }),
    });

    router.push('/quiz/A4');
  };

  const participationLabel = "絵本工房"; // ここで企画名を設定

  return (
    <div style={{
      background: 'linear-gradient(to bottom, #e0bbff 50%, #add8e6 100%)',
      minHeight: 'fit-content',
    }}>
      <StoryComponent
        stories={stories}
        onParticipationChange={handleParticipation}
        onParticipationConfirmed={() => console.log('参加が確認されました')}
        correctKeyword={correctKeyword}
        correctHint={correctHint}
          course="読み聞かせ" // courseを指定
        step={1}   // stepを指定
        onNext={handleNext} // onNext関数を渡す
        onHint={handleNext}
        participationLabel={participationLabel} // 企画名を渡す
      />
    </div>
  );
};

export default QuizCourseA;