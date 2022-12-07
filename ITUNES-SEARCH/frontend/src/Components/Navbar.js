//importing nescary dependies
import React from "react";
import { Link } from "react-router-dom";
//navigation functionality
function Navbar() {
  //using links to differnt pages in a navigation
  return (
    <nav>
      <div id="heading-wrapper">
        <h1>ITUNES-SEARCH</h1>
      </div>

      <div id="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/Favourites">Favourites</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
//exporting the navigation
export default Navbar;
