import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllCats() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cats") // ✅ Adjust this to match your backend URL
      .then((res) => res.json())
      .then((data) => setCats(data))
      .catch((err) => console.error("Error fetching cats:", err));
  }, []);

  return (
    <div>
      <h1>All Cats</h1>
      <ul>
        {cats.map((cat) => (
          <li key={cat.id}>
            <Link to={`/cats/${cat.id}`}>{cat.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/add-cat">
        <button>Add a New Cat</button>
      </Link>
    </div>
  );
}

export default AllCats;
