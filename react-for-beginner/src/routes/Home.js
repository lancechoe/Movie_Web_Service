import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import { ClipLoader } from "react-spinners";
import "./Home.css";

function Home() {
  /* Movie */
  const [mloading, setmLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch("https://yts.mx/api/v2/list_movies.json?sort_by=like_count")
    ).json();
    setMovies(json.data.movies);
    setmLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="home-container">
      {/* Movies */}
      <div>
        {mloading ? (
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <ClipLoader color="#3498db" size={60} />
          </div>
        ) : (
          <>
            <h2 className="section-title">Movies You Must Watch</h2>
            <div className="movie-list">
              {movies.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  coverImg={movie.medium_cover_image}
                  title={movie.title}
                  genres={movie.genres}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
