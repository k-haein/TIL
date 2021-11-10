import React from "react";
import axios from "axios";
import Movie from "./Movie";


class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    //this.setState({ movies : movies });
    //                 ㄴstate   ㄴaxios
    this.setState({ movies, isLoading: false });

  };
  componentDidMount() {
    //axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.getMovies();
  }

  /*
  //css 하기 위해 html화
  
  render() {
    const { isLoading, movies } = this.state;
    //                  ㄴstate에서 가쟈온 movies / 안가져오면 this.movies.state.movies로 가져와야함
    return (

      <div>{isLoading ? "Loading..." : movies.map(movie => (
        //                             ㄴ배열에 담긴 movie리스트
        <Movie
          key={movie.id}
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
        />

      ))}
      </div>
    );
  }*/

  render() {
    const { isLoading, movies } = this.state;
    //                  ㄴstate에서 가쟈온 movies / 안가져오면 this.movies.state.movies로 가져와야함
    return (
    
      <section className="container">
        {isLoading ? (
        <div className="loader">
        <span className="loader_text">Loading..."</span>
        </div>
        ):(
          <div className="movies">
          {movies.map(movie => (
        //                             ㄴ배열에 담긴 movie리스트
        <Movie
          key={movie.id}
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
          genres={movie.genres}
        />

        ))}
      </div>
        )}
      </section>
    );
  }
}


export default App;