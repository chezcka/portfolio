import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/certifications">Certifications</NavLink>
    </nav>
  );
}
