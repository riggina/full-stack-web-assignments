import MovieCard from "../components/MovieCard";
import MovieListFilter from "../components/MovieListFilter";
import { useLocation } from "react-router";
import qs from "qs";

import movies from "../dummy-data";

const MovieList = () => {
  const shows = [10, 20, 30];
  const categories = ["TV", "Movie"];
  const fields = ["title", "score"];

  let queryParam = useLocation().search.slice(1)

  // Variable yang akan menampung parameter yang telah diberikan oleh user
  const params = qs.parse(queryParam);

  // Variable yang kita gunakan untuk melakukan penyaringan data
  const filter = {
    show: Number(params.show) || shows[0],
    category: params.category || categories[0],
    sort: params.sort || fields[0]
  };

  // Variable yang akan menyimpan data-data yang sudah difilter menggunakan variable filter diatas
  const filteredMovies = movies;

  return (
    <div className="row">
      <MovieListFilter />
      {filteredMovies.map((movie) => (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={movie.mal_id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
