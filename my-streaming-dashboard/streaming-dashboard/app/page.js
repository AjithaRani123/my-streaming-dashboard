import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header />

      <section className="hero">
        <h1>Welcome to StreamX</h1>
        <p>Your simple streaming dashboard built with Next.js + HTML + CSS + JS</p>
      </section>
    </div>
  );
}