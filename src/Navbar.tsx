import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="nav-bar">
        <Link className="nav-logo-link" to="/">
          <button className="button-74" role="button">
            Home
          </button>
        </Link>

        <ul className="nav-right-list">
          <li className="nav-message-board-list-item">
            <Link to="/1" className="nav-message-board-link">
              <button className="button-74" role="button">
                Message Board
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
