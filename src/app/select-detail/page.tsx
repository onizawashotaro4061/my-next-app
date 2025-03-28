"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function SelectDetail() {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    if (gender && age) {
      const ageNum = parseInt(age, 10);

      // 年齢のバリデーション
      if (isNaN(ageNum) || ageNum < 0 || ageNum > 120) {
        alert('有効な年齢を入力してください。');
        return;
      }

      setLoading(true);

      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ gender, age: ageNum }),
      });

      setLoading(false);

      if (response.ok) {
        router.push('/click-counter');
      } else {
       router.push('/click-counter');
      }
    }
  };

  return (
     <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',  
      flexDirection: 'column', 
      textAlign: 'center',
      background: 'linear-gradient(to bottom, #87CEFA, #DDA0DD 40%, #DDA0DD 60%, #87CEFA)',
      padding: '20px', 
      minHeight: '100vh'
      }}>
        
      <Image src="/images/logo_transparent.png"
      width={500}
       height={500}
      alt="Example Image" style={{
          width: '100%',
          height: 'auto',
          marginBottom: '20px' }} />

      <h1 style={{ 
        fontSize: '24px', 
        fontWeight: 'bold', 
        color: '#4B0082', 
        marginBottom: '30px'
      }}>
        あなたのことを教えてね
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
        <button 
          onClick={() => setGender('男性')}
          style={{
            padding: '10px 20px',
            backgroundColor: gender === '男性' ? '#0070f3' : '#e0e0e0',
            color: gender === '男性' ? '#ffffff' : '#000000',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          男性
        </button>
        <button 
          onClick={() => setGender('女性')}
          style={{
            padding: '10px 20px',
            backgroundColor: gender === '女性' ? '#ff4081' : '#e0e0e0',
            color: gender === '女性' ? '#ffffff' : '#000000',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          女性
        </button>
        <button 
          onClick={() => setGender('無回答')}
          style={{
            padding: '10px 20px',
            backgroundColor: gender === '無回答' ? '#9ACD32' : '#e0e0e0',
            color: gender === '無回答' ? '#ffffff' : '#000000',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          無回答
        </button>
        
      </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <input
          type="number"
          placeholder="年齢を入力する"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={{
            padding: '10px 40px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            textAlign: 'center',
            color: 'black',

          }}
        />
      </div>
       <button 
        onClick={handleSubmit} 
        disabled={loading} 
        style={{ 
          padding: '10px 70px', 
          backgroundColor: '#0070f3', 
          color: '#ffffff', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer',
        }}
      >
        送信
      </button>
    </div>
  );
}
