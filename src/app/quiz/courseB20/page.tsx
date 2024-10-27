// src/app/courseA12/page.tsx
"use client";
import { useRouter } from 'next/navigation';
import ChoiceComponent from '@/app/components/ChoiceComponent';

const Page: React.FC = () => {
  const router = useRouter();

  // ページ遷移処理
  const handleNext = (url: string) => {
    router.push(url);
  };

  const handleHint = (url: string) => {
    router.push(url);
  };

  return (
    <div>
      <ChoiceComponent
        imageUrl="/images/QB3.jpg"  // 画面上部に表示する画像のパス
        correctAnswer={2}  // 正解の番号
        course="B"  // 記録するコース名
        label="Q5"  // 記録するラベル
        successUrl="/quiz/courseB21"  // 正解時に遷移するURL
      />
      <p>石像により問題が繰り出された！フクロウ冒険家と共に謎を解こう！</p>
    </div>
  );
};

export default Page;
