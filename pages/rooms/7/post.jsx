import { useState } from "react";

export default function PostComment() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    await fetch(`https://comment-api.uniproject.jp/api/7/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    setText("");
    setLoading(false);
    setSuccess(true);
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <h2>コメント投稿</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          style={{ width: "100%" }}
          required
        />
        <button
          type="submit"
          disabled={loading || !text}
          style={{ marginTop: 8 }}
        >
          {loading ? "送信中..." : "送信"}
        </button>
      </form>
      {success && (
        <div style={{ color: "green", marginTop: 8 }}>送信完了！</div>
      )}
    </div>
  );
}
