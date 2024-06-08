import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/watchlist">WatchList</Link>
        </li>
        {/* Add more sidebar items here if needed */}
      </ul>
    </aside>
  );
};

export default Sidebar;
