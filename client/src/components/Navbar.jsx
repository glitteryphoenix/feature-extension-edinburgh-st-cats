import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">All Cats</Link> | <Link to="/add-cat">Add a Cat</Link>
    </nav>
  );
}

export default Navbar;

