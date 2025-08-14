import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import DanmakuComment from "../../../components/DanmakuComments";

const socket = io("https://comment-api.uniproject.jp/");

export default function Player() {
  const [comments, setComments] = useState([]); // 新着だけ
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);

  // 弾幕が流れ終わったら消す
  const handleDanmakuEnd = (id) => {
    setComments((prev) => prev.filter((c) => c.id !== id));
  };

  useEffect(() => {
    // 接続確認
    socket.on("connect", () => {
      console.log("socket.io connected!");
    });
    socket.on("disconnect", () => {
      console.log("socket.io disconnected!");
    });
    // 新着コメントだけ受信して流す
    socket.on("new-comment5", (comment) => {
      console.log("new-comment受信:", comment);
      setComments((prev) => [...prev, comment]);
    });
    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("new-comment5");
    };
  }, []);

  // 画面収録ストリームをvideoにセット
  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  const handleStartCapture = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: false,
      });
      setStream(mediaStream);
    } catch (err) {
      alert("画面収録の許可が必要だよ！");
    }
  };

  // 全画面化
  const playerRef = useRef(null);
  const handleFullscreen = () => {
    const el = playerRef.current;
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else if (el.mozRequestFullScreen) {
      el.mozRequestFullScreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    }
  };

  return (
    <div
      ref={playerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "#222",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        zIndex: 100,
      }}
    >
      <button
        onClick={handleFullscreen}
        style={{ position: "absolute", top: 20, left: 40, zIndex: 200 }}
      >
        全画面
      </button>
      <button
        onClick={handleStartCapture}
        style={{ position: "absolute", top: 20, right: 40, zIndex: 200 }}
      >
        画面収録開始
      </button>
      {/* 画面収録映像 */}
      <video
        ref={videoRef}
        autoPlay
        muted
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 101,
        }}
      />
      {/* 新着コメントだけ弾幕で流す */}
      {comments.map((c) => (
        <DanmakuComment
          key={c.id + "-" + c.createdAt}
          text={c.text}
          onEnd={() => handleDanmakuEnd(c.id)}
        />
      ))}
    </div>
  );
}
