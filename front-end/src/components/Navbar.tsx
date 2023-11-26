import '../styles/Navbar.css';
import React from "react";
import {Link} from "react-router-dom"

const Navbar: React.FC = () => {
    return (
      <div className="navbar">
        <nav >
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/">Work Experience</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
        </div>
      );
  };
  
export default Navbar;