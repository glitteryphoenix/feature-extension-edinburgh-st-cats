import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#29733c", padding: "20px 50px" }}>
      <div className="container">
        <h1 className="navbar-brand text-white fw-bold" style={{ fontSize: "2.5rem", marginLeft: "20px" }}>
          Cats of Edinburgh
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link text-white btn btn-lg px-4 mx-2"
                style={{ backgroundColor: "#1D532B", fontSize: "1.2rem" }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white btn btn-lg px-4"
                style={{ backgroundColor: "#1D532B", fontSize: "1.2rem" }}
                to="/add-cat"
              >
                Add New Cat
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

