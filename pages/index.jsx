import Link from "next/link";

const ROOMS = [
  { place: "1F ホール", id: 1 },
  { place: "4F 研修室4-10", id: 2 },
  { place: "4F 研修室4-6", id: 3 },
  { place: "4F 研修室4-5", id: 4 },
  { place: "4F 研修室4-4", id: 5 },
  { place: "4F 研修室4-3", id: 6 },
  { place: "4F 研修室4-2", id: 7 },
];

export default function Home() {
  return (
    <div
      style={{
        maxWidth: 500,
        margin: "40px auto",
        textAlign: "center",
        background: "#fff",
        borderRadius: 16,
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        padding: 32,
      }}
    >
      <h1
        style={{
          fontWeight: 800,
          fontSize: 32,
          marginBottom: 8,
          color: "#2d3748",
        }}
      >
        Seccamp2025
        <br />
        コメントビューア
      </h1>
      <ul style={{ listStyle: "none", padding: 0, marginTop: 32 }}>
        {ROOMS.map((room) => (
          <li
            key={room.id}
            style={{
              marginBottom: 24,
              background: "#f7fafc",
              borderRadius: 12,
              padding: 20,
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
            }}
          >
            <span style={{ fontWeight: 600, fontSize: 18, color: "#4a5568" }}>
              {room.place}
            </span>
            <div style={{ display: "flex", gap: 10 }}>
              <Link
                href={`/rooms/${room.id}/player`}
                style={{
                  background: "#3182ce",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "8px 16px",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "background 0.2s",
                  fontSize: 15,
                }}
              >
                プレイヤー
              </Link>
              <Link
                href={`/rooms/${room.id}/post`}
                style={{
                  background: "#38a169",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "8px 16px",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "background 0.2s",
                  fontSize: 15,
                }}
              >
                コメント
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: 32 }}>
        <Link
          href="/how"
          style={{
            color: "#3182ce",
            fontWeight: 700,
            fontSize: 16,
            textDecoration: "underline",
            transition: "color 0.2s",
          }}
        >
          使い方はこちら！
        </Link>
      </div>
    </div>
  );
}
