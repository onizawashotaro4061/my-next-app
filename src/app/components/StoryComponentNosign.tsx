// src/app/components/StoryComponent.tsx
"use client";

import React, { useState } from 'react';
import OverlayImageComponent from '@/app/components/OverlayImageComponent';
import AnswerForm from '@/app/components/AnswerForm';
import Image from 'next/image';

interface Story {
  text: string;
  image: string;
  overlayImage?: string;
  participationStatus?: boolean;
  answerFormProps?: boolean;
}

interface StoryComponentProps {
  stories: Story[];
  onParticipationChange: (participated: boolean) => void;
  onParticipationConfirmed: () => void;
  participationLabel: string;
  correctKeyword: string[];
  correctHint: string[];
  course: string; // courseを追加
  step: number;   // stepを追加
  onNext: () => void;
  onHint: () => void;
}

const StoryComponent: React.FC<StoryComponentProps> = ({
  stories,
  correctKeyword,
  correctHint,
  course,
  step,
  onNext,
  onHint,
}) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [showMap, setShowMap] = useState(false)
  const [keywordInput, setKeywordInput] = useState('');

  const handleKeywordSubmit = () => {
    if (correctKeyword.includes(keywordInput)) {
      onNext(); // 正しいキーワードの遷移先
    } else if (correctHint.includes(keywordInput)) {
      onHint();
    } else {
      alert('正しいキーワードを入力してください。');
    }
  };
  const handleNextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
    }
  };
  const handlePreviousStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
    }
  };

  return (
    <div style={{ padding: '20px', minHeight: '100vh' }}>
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
      <OverlayImageComponent
        baseImage={stories[currentStoryIndex].image}
        overlayImage={stories[currentStoryIndex].overlayImage}
        altText={`ストーリーの画像 ${currentStoryIndex + 1}`}
        overlayImageStyle={{ width: '100px', top: '20px', left: '20px' }}
        style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '10px' }}
      />

      <div
        style={{
          border: '2px solid #4a90e2',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          color: 'black',
          marginBottom: '10px',
        }}
      >
        <p style={{ 
          fontSize: '18px',
          textAlign: 'left',
          }}>
          {stories[currentStoryIndex].text.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          {currentStoryIndex > 0 && (
            <button
              onClick={handlePreviousStory}
              style={{
                cursor: 'pointer',
                backgroundColor: '#4a90e2',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                padding: '5px 10px',
              }}
            >
              戻る
            </button>
          )}

          {currentStoryIndex < stories.length - 1 && (
            <button
              onClick={handleNextStory}
              style={{
                cursor: 'pointer',
                backgroundColor: '#4a90e2',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                padding: '5px 10px',
                marginLeft: currentStoryIndex > 0 ? 'auto' : '0',
              }}
            >
              次へ
            </button>
          )}
        </div>

      {/* AnswerFormの表示制御 */}
      {stories[currentStoryIndex].answerFormProps && (
        <AnswerForm
          keywordInput={keywordInput}
          setKeywordInput={setKeywordInput}
          onSubmit={handleKeywordSubmit}
          course={course} // courseを渡す
          step={step}     // stepを渡す
        />
      )}
       {showMap && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 bg-black rounded-full p-3 w-8 h-8 flex items-center justify-center text-white"

              onClick={() => setShowMap(false)}
            >
              ✕
            </button>
            <Image
              src="/images/campusmap.jpg"
              alt="マップ"
              width={500} // 必要に応じて適切な幅に変更してください
              height={500} // 必要に応じて適切な高さに変更してください
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default StoryComponent;