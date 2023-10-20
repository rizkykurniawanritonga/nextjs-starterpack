"use client";
import { signOut } from "next-auth/react";
export default function HeaderDash() {
  return (
    <>
      <h1>Header</h1>
      <button onClick={() => signOut()}>Logout</button>
    </>
  );
}
