import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Halaman Utama</h1>
      <Link href="/auth/login">Login Yuk</Link>
    </>
  );
}
