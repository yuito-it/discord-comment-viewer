import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ maxWidth: 400, margin: '40px auto', textAlign: 'center' }}>
      <h1>コメントビューア</h1>
      <Link href="/post"><button style={{ margin: 8 }}>コメント投稿ページへ</button></Link>
      <Link href="/player"><button style={{ margin: 8 }}>プレイヤーへ</button></Link>
    </div>
  );
}
