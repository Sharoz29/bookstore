import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <Link to={"/"} className="link">
          <span className="books">Books</span>
        </Link>
        <Link to={"/"} className="link">
          <form className="searchbar-container">
            <input
              type="text"
              className="searchbar"
              placeholder="Search for your favourite books"
            />
          </form>
        </Link>
        <Link className="link" to={"/favourites"}>
          <span className="favs">Favorites</span>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
