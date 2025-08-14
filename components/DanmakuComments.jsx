"use client";
import { useState, useEffect, useRef } from "react";

function getRandomY() {
  // 画面の高さに合わせてランダムY座標を決定
  const minY = 40;
  const maxY = window.innerHeight - 60;
  return Math.floor(Math.random() * (maxY - minY)) + minY;
}

export default function DanmakuComment({ text, onEnd }) {
  const [left, setLeft] = useState(window.innerWidth);
  const y = useRef(getRandomY());
  useEffect(() => {
    const id = setInterval(() => {
      setLeft((l) => l - 4); // 速度ちょい上げ
    }, 16);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    if (left < -400) {
      onEnd && onEnd();
    }
  }, [left, onEnd]);
  if (left < -400) return null;
  return (
    <div
      style={{
        position: "absolute",
        top: y.current,
        left,
        whiteSpace: "nowrap",
        color: "#fff",
        fontWeight: "bold",
        fontSize: 64,
        // 黒背景でも白背景でも見やすいように太めの黒縁をつける
        textShadow: `
        2px 2px 0 #000,
        -2px 2px 0 #000,
        2px -2px 0 #000,
        -2px -2px 0 #000,
        0 2px 0 #000,
        2px 0 0 #000,
        0 -2px 0 #000,
        -2px 0 0 #000
      `,
        pointerEvents: "none",
        transition: "left 0.016s linear",
        // 背景色・枠線なし
        zIndex: 110,
      }}
    >
      {text}
    </div>
  );
}
