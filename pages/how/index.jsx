import React from "react";

export default function Home() {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "32px",
        background: "#fff",
        borderRadius: "16px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        fontFamily: "'Segoe UI', 'Hiragino Sans', Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "2.2rem",
          color: "#6C63FF",
          marginBottom: "24px",
          letterSpacing: "2px",
        }}
      >
        使い方
      </h1>
      <ol
        style={{
          paddingLeft: "24px",
          fontSize: "1.1rem",
          color: "#333",
          lineHeight: "2",
        }}
      >
        <li>
          <b>登壇者</b>が右上の
          <span
            style={{
              background: "#F3F4F6",
              borderRadius: "6px",
              padding: "2px 8px",
              margin: "0 4px",
              fontWeight: "bold",
              color: "#6C63FF",
            }}
          >
            画面収録
          </span>
          をクリックし、画面収録を開始！
        </li>
        <li>
          画面収録が始まったら、左上の
          <span
            style={{
              background: "#F3F4F6",
              borderRadius: "6px",
              padding: "2px 8px",
              margin: "0 4px",
              fontWeight: "bold",
              color: "#6C63FF",
            }}
          >
            全画面
          </span>
          ボタンをクリックして全画面にしよう！
        </li>
        <li>
          <b>コメント投稿ページ</b>から投稿すると、コメントが流れます✨
        </li>
      </ol>
    </div>
  );
}
