//import "./Styles/Ebook.css";
import React from "react";
//the ebooks functinality
function Ebook() {
  //giving and varaible and storing it to json
  let Data = JSON.parse(sessionStorage.getItem("ebook"));

  // storing the ebooks in an empty arrary
  let array = [];
  const store = (author, image, bookTitle) => {
    array.push({ author: author, image: image, bookTile: bookTitle });

    sessionStorage.setItem("favBook", JSON.stringify(array));
  };
  //returning the ebooks
  return Data === null ? (
    <div id="empty-search">Go back and Search...</div>
  ) : (
    <section id="musicRender">
      {Data.results.map((ebook, i) => {
        return (
          <div key={i} className="ebook-Content">
            <div>
              <img src={ebook.artworkUrl100} alt={ebook.trackName} />
            </div>

            <div className="ebooks-description">
              <p>Author: {ebook.artistName}</p>
              <p>Book Name: {ebook.trackName}</p>
              <button
                className="favourites-btn"
                onClick={() => {
                  store(ebook.trackName, ebook.artworkUrl100, ebook.trackName);
                }}
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
//exporting the ebooks
export default Ebook;
