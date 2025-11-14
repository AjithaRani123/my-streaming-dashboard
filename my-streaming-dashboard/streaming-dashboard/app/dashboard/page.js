"use client";

import Header from "../components/Header";
import MovieCard from "../components/MovieCard";

export default function Dashboard() {
  const movies = [
    { title: "Action Movie" },
    { title: "Romantic Movie" },
    { title: "Comedy Movie" },
    { title: "Adventure Movie" },
    { title: "Sci-Fi Movie" }
  ];

  return (
    <div>
      <Header />

      <section className="dashboard">
        <h1 className="section-title">Trending Movies</h1>

        <div className="movie-grid">
          {movies.map((m, index) => (
            <MovieCard key={index} title={m.title} />
          ))}
        </div>
      </section>
    </div>
  );
}