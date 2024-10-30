// src/app/components/StoryComponent.tsx
"use client";

import React, { useState } from 'react';
import OverlayImageComponent from '@/app/components/OverlayImageComponent';
import AnswerForm from '@/app/components/AnswerForm';

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
  correctKeyword: string;
  correctHint: string;
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
  const [keywordInput, setKeywordInput] = useState('');

  const handleKeywordSubmit = () => {
    if (keywordInput === correctKeyword) {
      onNext(); // 正しいキーワードの遷移先
    } else if (keywordInput === correctHint) {
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
    <div style={{ padding: '20px', height: '100vh' }}>
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
    </div>
  );
};

export default StoryComponent;
