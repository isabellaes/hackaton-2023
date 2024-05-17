import { Link } from "react-router-dom";
import "./_navbar.scss"

const Navbar = () => {
    return (
      <div className="navbar">
        <div className="menubar">
          <ul>
            <li>
              <Link to="/">Hem</Link>
              <Link to="./activity/:id">Hitta Aktivitet</Link>
              <Link to="./activities">Boka Aktivitet</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Navbar;