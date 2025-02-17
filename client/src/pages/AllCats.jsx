import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Map from "../components/Map";

function AllCats() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetchCats();
  }, []);

  async function fetchCats() {
    try {
      const res = await fetch("http://localhost:4000/api/cats");
      const data = await res.json();
      setCats(data);
    } catch (err) {
      console.error("Error fetching cats:", err);
    }
  }

  async function handleDelete(id) {
    const confirmDelete = window.confirm("Are you sure you want to delete this cat?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:4000/api/cats/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to delete cat.");
      }

      fetchCats(); // Refresh list after deletion
    } catch (err) {
      console.error("Error deleting cat:", err);
    }
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">🐾 Street Cats of Edinburgh</h1>

      {/* Map Section */}
      <div className="mb-4">
        <Map cats={cats} />
      </div>

      {/* Grid Layout for Cats */}
      <div className="row justify-content-center">
        {cats.length > 0 ? (
          cats.map((cat) => (
            <div key={cat.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card shadow-sm text-center cat-card">
                <img 
                  src={cat.image || "https://via.placeholder.com/150"} 
                  alt={cat.name} 
                  className="card-img-top cat-img"
                />
                <div className="card-body">
                  <h5 className="card-title">{cat.name}</h5>
                  <p className="card-text"><strong>📍 {cat.location}</strong></p>
                  
                  <div className="d-flex justify-content-between">
                    <Link to={`/cats/${cat.id}`} className="btn btn-primary">
                      View Details
                    </Link>
                    <button onClick={() => handleDelete(cat.id)} className="btn btn-danger">
                      🗑 Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No cats found. Add one!</p>
        )}
      </div>

      {/* Add Cat Button */}
      <div className="text-center mt-4">
        <Link to="/add-cat" className="btn btn-success">➕ Add a New Cat</Link>
      </div>
    </div>
  );
}

export default AllCats;






