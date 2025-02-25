import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#29733c" }}>
      <h1 className="navbar-brand text-white">Cats of Edinburgh</h1>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/" style={{ color: "#1D532B" }}>All Cats</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/add-cat" style={{ color: "#1D532B" }}>Add a Cat</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
