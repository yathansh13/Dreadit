import { Link, Outlet } from "react-router-dom";
import "./AllPosts.css";

export default function MessageBoard() {
  return (
    <div className="message-board-container">
      <Link to="/1">
        <h2 className="head-text">Message Board</h2>
      </Link>
      <Outlet />
    </div>
  );
}
