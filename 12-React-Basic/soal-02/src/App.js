import { Component } from "react";
import animeList from "./dummy-data";
import MovieCard from "./MovieCard";

class App extends Component {
  constructor(props){
    super(props)


    this.state = {
      movieList: [],
      isLoading: false
    }
  };

  async fetchMovieList() {
    try{
      const response = await fetch ('https://api.jikan.moe/v3/top/anime')
      const data = await response.json()
      this.setState({
        movieList: data.top
      })
    }
    catch(error){
      console.log(error);
    };    
  };

  componentDidMount(){
    this.fetchMovieList()
  };

  componentDidUpdate(prevProps, prevState){
    if(prevState.movieList !== this.state.movieList){
      this.setState({
        isLoading : true
      });
    };
  };


  render() {
    let inside;
    if (this.state.isLoading){
      inside = this.state.movieList.map(movie => {
        return (
          <div className="col-12 col-lg-3 col-md-4 col-sm-6" key={movie.mal_id}>
            <MovieCard movie={movie}></MovieCard>
          </div>
        )
      })
    }
    else{
      inside = <h2>Loading...</h2>
    }

    return (
      <div className="container my-5">
        <h1 className="text-center">Anime List</h1>
        <div className="container my-5">
          <div id="daftar-anime" className="row">
            {inside}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
