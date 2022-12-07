//importing the nescary dependencies
import React from "react";
//import "./Styles/Favourites.css";

function Favourites() {
  //fecthching the data from prevouis stored and giving it an varaible
  let favBookData = JSON.parse(sessionStorage.getItem("favBook"));
  let favMusicData = JSON.parse(sessionStorage.getItem("favMusic"));
  let favMovieData = JSON.parse(sessionStorage.getItem("favMovie"));

  let storageData = [favBookData, favMusicData, favMovieData];

  let definedStorage = storageData.filter(checkData);
  function checkData(data) {
    return data != null;
  }

  //returning the stored data to display as faviriotes
  return storageData === null ? (
    <p>Go back and Search...</p>
  ) : (
    <section id="fav-Render">
      {definedStorage[0].map((favouriteItem, i) => {
        return (
          <div key={i} className="fav-Container">
            <div id={favouriteItem.image}>
              <img src={favouriteItem.image} alt={favouriteItem.image} />
            </div>

            <div className="fav-description">
              <p className="fav-Author">Item Heading: {favouriteItem.first}</p>
              <p className="favouriteItemAName">
                Item Sub-Heading: {favouriteItem.last}
              </p>
              <button>
                <a href="https://itunes.apple.com/us/movie/">Get from iTunes</a>
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}
//exporting favourites
export default Favourites;
