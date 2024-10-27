// src/app/courseA12/page.tsx
"use client";
import ChoiceComponent from '@/app/components/ChoiceComponent';

const Page: React.FC = () => {

  // ページ遷移処理

  return (
    <div>
      <ChoiceComponent
        imageUrl="/images/QA2.jpg"  // 画面上部に表示する画像のパス
        correctAnswer={3}  // 正解の番号
        course="A"  // 記録するコース名
        label="Q1"  // 記録するラベル
        successUrl="/quiz/courseA19"  // 正解時に遷移するURL
      />
    </div>
  );
};

export default Page;
