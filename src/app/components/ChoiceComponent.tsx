// src/app/components/ChoiceComponent.tsx
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface ChoiceComponentProps {
  imageUrl: string;  // 画面上部に表示する画像のURL
  correctAnswer: number; // 正解の番号をpage.tsxで指定
  course: string; // Supabaseに記録するためのコース名
  label: string;  // Supabaseに記録するためのラベル
  successUrl: string; // 正解した場合に遷移するURL
}

const ChoiceComponent: React.FC<ChoiceComponentProps> = ({
  imageUrl,
  correctAnswer,
  course,
  label,
  successUrl,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showMap, setShowMap] = useState(false)
  const router = useRouter();

  const handleAnswerClick = async (answer: number) => {
    setSelectedAnswer(answer);

    // 正解かどうかをチェック
    if (answer === correctAnswer) {
      setIsCorrect(true);

      // Supabaseに正解のクリック数を記録する処理
      await fetch('/api/record-correct-click', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          course: course,
          label: label,
          correctClick: true,
        }),
      });

      // 正解したら指定のURLに遷移
      router.push(successUrl);
    } else {
      setIsCorrect(false);
      setErrorMessage('不正解です。もう一度試してください。');
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      height: '100vh',
      padding: '20px 10px',
    }}>
      <div className="flex justify-start space-x-2 mb-4">
        <button
          className="px-4 py-2 bg-[#3B82F6] text-white rounded-lg text-sm"
          onClick={() => setShowMap(true)}
          style={{
          }}
        >
          MAP
        </button>
      </div>
      {/* 画面上部に画像を表示 */}
      <Image src={imageUrl} alt="画像" width={300} height={300} style={{
        marginTop: '50px',
        maxHeight: '80%',
        maxWidth: '100%',
        width: '100%',
      }} />
      <div
        style={{
          border: '2px solid #4a90e2',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          color: 'black',
          marginTop: '20px',
          marginBottom: '10px',
          width: '100%',
        }}
      >
        <p style={{ 
          fontSize: '18px',
          textAlign: 'left',
          }}>
            問題が現れた！
            <br />
            正しいと思う番号を押してね！
            <br />
            何回でも解答していただけます
        </p>
      </div>

      {/* 画面下部に5つのボタンを表示 */}
      <div style={{ 
        marginTop: '50px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() => handleAnswerClick(num)}
            style={{
              padding: '20px 30px',
              fontSize: '20px',
              backgroundColor: selectedAnswer === num ? (isCorrect ? 'green' : 'red') : '#0070f3',
            }}
          >
            {num}
          </button>
        ))}
      </div>

      {/* 不正解のメッセージをボタン全体の下に表示 */}
      {selectedAnswer !== correctAnswer && errorMessage && (
        <p style={{ color: 'red', marginTop: '20px', textAlign: 'center' }}>{errorMessage}</p>
      )}

      {showMap && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 bg-black rounded-full p-3 w-8 h-8 flex items-center justify-center"
              onClick={() => setShowMap(false)}
            >
              ✕
            </button>
            <Image
              src="/images/campusmap.jpg"
              alt="マップ"
              width={500} // 必要に応じて適切な幅に変更してください
              height={300} // 必要に応じて適切な高さに変更してください
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChoiceComponent;