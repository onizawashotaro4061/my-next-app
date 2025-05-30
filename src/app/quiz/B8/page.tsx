// src/app/courseA12/page.tsx
"use client";
import ChoiceComponent from '@/app/components/ChoiceComponent';

const Page: React.FC = () => {

  // ページ遷移処理

  return (
    <div style={{
      background: 'linear-gradient(to bottom, #e0bbff 50%, #add8e6 100%)',
      height: '',
    }}>
      <ChoiceComponent
        imageUrl="/images/QB2.jpg"  // 画面上部に表示する画像のパス
        correctAnswer={1}  // 正解の番号
        course="B"  // 記録するコース名
        label="Q2"  // 記録するラベル
        successUrl="/quiz/B9"  // 正解時に遷移するURL
      />
    </div>
  );
};

export default Page;
