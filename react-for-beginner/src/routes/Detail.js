import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import "./Home.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?sort_by=like_count"
    );
    const json = await response.json();
    const found = json.data.movies.find((movie) => movie.id === parseInt(id));
    setMovie(found);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, [id]);

  return (
    <div className="detail-container">
      {loading ? (
        <div className="loader-wrapper">
          <ClipLoader color="#3498db" size={60} />
        </div>
      ) : movie ? (
        <div className="detail-content">
          <h1 className="title">{movie.title}</h1>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <p className="summary">{movie.summary || "No summary available."}</p>
          <ul className="genres">
            {movie.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Movie not found.</p>
      )}
    </div>
  );
}

export default Detail;
