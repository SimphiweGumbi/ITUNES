//importing nescary depndencies
import React from "react";
//import "./Styles/Movies.css";

//movie functionality
function Movie() {
  let Data = JSON.parse(sessionStorage.getItem("movie"));

  //storing the movies into an empty array
  let array = [];
  const storeToStorage = (movie, image, genre) => {
    array.push({ first: movie, image: image, last: genre });
    //console.log(array)
    sessionStorage.setItem("favMovie", JSON.stringify(array));
  };
  //returning the movies
  return Data === null ? (
    <div id="empty-search">Go back and Search</div>
  ) : (
    <section id="moviesRender">
      {Data.results.map((movies, i) => {
        return (
          <div key={i} className="movie-Content">
            <div className="moviePicture">
              <img src={movies.artworkUrl100} alt={movies.trackName} />
            </div>

            <div className="movie-description">
              <p className="movieName">Music Name:{movies.trackName}</p>
              <p className="year-released">Genre: {movies.primaryGenreName}</p>
              <button
                onClick={() => {
                  storeToStorage(
                    movies.trackName,
                    movies.artworkUrl100,
                    movies.primaryGenreName
                  );
                }}
                className="favourites-btn"
              >
                Add To Favourites
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}
//exporting the movies
export default Movie;
