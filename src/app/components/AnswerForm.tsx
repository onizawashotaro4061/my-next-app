// src/app/components/AnswerForm.tsx
"use client";

import React from 'react';

interface AnswerFormProps {
  keywordInput: string;
  onSubmit: () => void;
  setKeywordInput: (input: string) => void; // ここが正しいか確認
  course: string; // 追加: コース名を受け取る
  step: number;   // 追加: ステップを受け取る
}

const AnswerForm: React.FC<AnswerFormProps> = ({ keywordInput, setKeywordInput, onSubmit, course, step }) => {
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (keywordInput.trim()) {
      await fetch('/api/participation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          course,
          step,
        }),
      });
      onSubmit(); // 親コンポーネントのonSubmitを呼び出す
    }
  };

  return (
    <form onSubmit={handleSubmit}
    style={{
      textAlign: 'center',
    }}>
      <input
        type="text"
        value={keywordInput}
        onChange={(e) => setKeywordInput(e.target.value)}
        placeholder="入力する"
        style={{
              color: 'black',
              paddingTop: '10px',
              paddingBottom: '10px',
              textAlign: 'center',
              width: '80%',
              borderRadius: '5px',
              marginTop: '20px',
        }}
        required
      />
      <button onClick={handleSubmit}
      type="submit" style={{
            padding: '10px 20px',
            backgroundColor: '#0070f3',
            color: '#ffffff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '30px',
            width: '80%',
          }}>送信</button>
    </form>
  );
};

export default AnswerForm;