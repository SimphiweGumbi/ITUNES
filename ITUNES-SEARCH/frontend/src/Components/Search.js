//importing nescary dependies
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import "./Styles/Search.css";

//search bar functionality
function Search() {
  //using states to sore
  const [search, setSearch] = useState(" ");
  const [mediaType, setMediaType] = useState("movie");
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleMediaTypeSelect = (e) => {
    setMediaType(e.target.value);
  };

  //store userData into an object, that we are goint to send to the server, after the data is submitted
  useEffect(() => {
    setUserData({ search: search, mediaType: mediaType });
  }, [search, mediaType]);

  //using an async await function for promise to be resoved
  async function postReq() {
    return await fetch("http://localhost:3001/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
  }

  //when entering the media type thre specific media will appear
  const fetchData = (e) => {
    e.preventDefault();
    postReq()
      .then((response) => response.json())
      .then((data) => {
        sessionStorage.setItem(`${mediaType}`, JSON.stringify(data));
        navigate(`/${route}`);
      });
    setMediaType(null);
    setSearch(null);
  };

  //based on the mediaType user selects, we navigate to that route(defined the routes with useNavigate())
  let route;
  if (mediaType === "movie") {
    route = "./Movie";
  } else if (mediaType === "musicTrack") {
    route = "./Music";
  } else {
    route = "./Ebook";
  }
  //returning the search bar
  return (
    <section id="searchContainer">
      <form onSubmit={fetchData}>
        <label htmlFor="search" className="formSearchChild">
          Search-Bar:
        </label>
        <input
          type="search"
          className="search formSearchChild"
          onChange={handleSearch}
          value={search || " "}
        />
        <select onChange={handleMediaTypeSelect} className="formSearchChild">
          <option value="movie">Movie</option>
          <option value="ebook">Ebook</option>
          <option value="musicTrack">Music Track</option>
        </select>
        <input type="submit" id="submitBtn" className="formSearchChild" />
      </form>
    </section>
  );
}
export default Search;
