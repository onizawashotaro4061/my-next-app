// src/app/components/ParticipationStatus.tsx
import React, { useState } from 'react';
import ClickButton from './ClickButton';

interface ParticipationStatusProps {
  onParticipationChange: (participated: boolean) => void;
  onParticipationConfirmed: () => void; // 参加確認のためのコールバック
  correctKeyword: string[];
  correctHint: string[];
  onNext: (url: string) => void; // ページ遷移のためのコールバック
  onHint: (url: string) => void;
  participationLabel: string; // 参加する企画の名称
}

const ParticipationStatus: React.FC<ParticipationStatusProps> = ({
  onParticipationChange,
  onParticipationConfirmed,
  correctKeyword,
  correctHint,
  onNext,
  onHint,
  participationLabel, // 追加: 参加する企画の名称
}) => {
  const [hasParticipated, setHasParticipated] = useState<boolean | null>(null);
  const [keyword, setKeyword] = useState('');
  const [keywordInput, setKeywordInput] = useState('');
  const [showWarning, setShowWarning] = useState('');

  const handleParticipation = async (participated: boolean) => {
    setHasParticipated(participated);
    onParticipationChange(participated); // 親コンポーネントに参加状況を通知

    await fetch('/api/participation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        course: 'A',
        step: 1,
        participated: participated,
      }),
    });

    if (participated) {
      onParticipationConfirmed(); // 参加確認コールバックを呼び出す
    }
  };

  const checkKeyword = async () => {
    if (correctKeyword.includes(keywordInput)) {
      setShowWarning('');
      onNext(''); // 正しいキーワードの場合にページ遷移
      await fetch('/api/keyword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          course: 'A',
          step: 1,
        }),
      });
    } else if(correctHint.includes(keywordInput)) {
      onHint('');
    }else {
      setShowWarning('キーワードが間違っています。もう一度入力してください。');
    }
  };

  return (
    <div>
      {hasParticipated === null ? (
        <div>
           <p style={{
            color: 'black',
            marginTop: '10px',
            marginBottom: '10px',
          }}>{`${participationLabel}の企画に参加しましたか？`}</p> {/* ここを修正 */}
          <ClickButton
            label="参加した"
            onClick={() => handleParticipation(true)}
            count={0}
            color='red'
          />
          <ClickButton
            label="参加していない"
            onClick={() => handleParticipation(false)}
            count={0}
            color='blue'
          />
        </div>
      ) : (
        <div>
          {/* 入力してください */}
          <p style={{
            color: 'black',
            marginTop: '10px',
            marginBottom: '10px',
            height: '40px',
          }}></p>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            style={{ 
              color: 'black',
              paddingTop: '10px',
              paddingBottom: '10px',
              textAlign: 'center',
              width: '80%',
              borderRadius: '5px',
            }}
            placeholder="入力する"
          />
          <div>
          <button onClick={checkKeyword} style={{
            padding: '10px 20px',
            backgroundColor: '#0070f3',
            color: '#ffffff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '30px',
            width: '80%',
          }}>送信</button>
          </div>
          {showWarning && <p style={{ color: 'red' }}>{showWarning}</p>}
        </div>
      )}
    </div>
  );
};

export default ParticipationStatus;
