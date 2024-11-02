"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function ClickLink() {

  return (
    <div style={{
      background: 'linear-gradient(to bottom, #87CEFA, #DDA0DD 40%, #DDA0DD 60%, #87CEFA)',  // 中央が薄紫、上下が水色
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: '#fff',
      padding: '0 10px',
          }}>
      <Image 
      src="/images/ClearA.png"
      width={300}
      height={300}
       alt="Example Image"
       style={{
          width: '100%',
          maxWidth: '600px',
          marginBottom: '20px' }} />
          <p style={{
            color: 'black',
            margin: '10px auto',
          }}>
            クリアおめでとう！
          </p>
          <p style={{
            color: 'red',
            fontSize: '20px',
          }}>
            ※この画面は消さないでね
          </p>
      <Link href="/">
      <button style={{
        fontSize: '16px',
        padding: '10px 40px',
        backgroundColor: '#4a90e2',
        color: '#ffffff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '20px',
        marginBottom: '30px',
        fontFamily: '"Cinzel", serif',                    // 古��なフォント
        transition: 'transform 0.2s',
        textShadow: '0 0 5px #87cefa',                  // ���色の発光テキスト
      }}>ホームに戻る</button>
      </Link>
    </div>
  );
}
