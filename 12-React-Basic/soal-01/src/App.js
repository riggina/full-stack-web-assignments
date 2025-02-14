import { Component } from "react";
import animeList from "./dummy-data";
import MovieCard from "./MovieCard";

class App extends Component {
  render() {
    return (
      <div className="container my-5">
        <h1 className="text-center">Anime List</h1>
        <div className="container my-5">
          <div id="daftar-anime" className="row">
            {animeList.map(movieData => {
              return(
                <div className="col-12 col-lg-3 col-md-4 col-sm-6" key={movieData.mal_id}>
                  <MovieCard movie={movieData}></MovieCard>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
