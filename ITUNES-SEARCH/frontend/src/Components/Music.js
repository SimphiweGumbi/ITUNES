//importing nescary dependency
import React from "react";
//import "./Styles/Music.css";

//music functionality
function Music() {
  //storing the music in the json so it can be added to favorites
  let Data = JSON.parse(sessionStorage.getItem("musicTrack"));

  //storing the music to an empty array
  let array = [];
  const storeToStorage = (artist, image, genre) => {
    array.push({ first: artist, image: image, last: genre });

    sessionStorage.setItem("favMusic", JSON.stringify(array));
  };
  //returning the music
  return Data === null ? (
    <div id="empty-search">Go back and Search...</div>
  ) : (
    <section id="musicRender">
      {Data.results.map((music, i) => {
        return (
          <div key={i} className="music-Content">
            <div>
              <img src={music.artworkUrl100} alt={music.trackName} />
            </div>

            <div className="music-description">
              <p>Artist: {music.artistName}</p>
              <p>Song Name: {music.trackName}</p>
              <p>Genre: {music.primaryGenreName}</p>
              <button
                onClick={() => {
                  storeToStorage(
                    music.trackName,
                    music.artworkUrl100,
                    music.trackName
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
//exporting music
export default Music;
