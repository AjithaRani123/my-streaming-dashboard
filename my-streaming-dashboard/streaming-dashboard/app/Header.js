"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <h2 className="logo">StreamX</h2>

      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
}