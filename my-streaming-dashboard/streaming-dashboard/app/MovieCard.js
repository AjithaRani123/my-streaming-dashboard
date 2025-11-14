export default function MovieCard({ title }) {
  return (
    <div className="movie-card">
      <div className="movie-img"></div>
      <h3>{title}</h3>
    </div>
  );
}