import '../styles/Navbar.css';
import React from "react";
import {Link} from "react-router-dom"

const Navbar: React.FC = () => {
    return (
      <div className="navbar">
        <nav >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/workexperience">Work Experience</Link>
            </li>
            <li>
              <Link to="/development">Development</Link>
            </li>
            <li>
              <Link to="/designs">Designs</Link>
            </li>
          </ul>
        </nav>
        </div>
      );
  };
  
export default Navbar;