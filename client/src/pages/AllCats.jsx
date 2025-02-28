import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Map from "../components/Map";
import LocationDropDownMenu from "../components/LocationDropdownMenu";

function AllCats() {
  const [cats, setCats] = useState([]);
  const [location, setLocation] = useState("");

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

  async function fetchCatsByLocation() {
    try {
      const res = await fetch(`http://localhost:4000/api/cats/${location}`);
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
    <div className="container mt-5">
      {/* MAP */}
      <div className="mb-4">
        <Map cats={cats} />
      </div>

      {/* ADD CAT BUTTON */}
      <div className="text-center my-4"> 
        <Link 
          to="/add-cat" 
          className="btn btn-success btn-lg px-4 py-3" // Makes the button bigger
          style={{ fontSize: "1.2rem" }} // Slightly larger font
        >
          Add New Cat
        </Link>
      </div>

{/* SEARCH BY LOCATION */}
<div>
  <h4> Search for cats in </h4>
  <LocationDropDownMenu handleChange={(e) => setLocation(e.target.value)} />
  <button onClick={fetchCatsByLocation}> Search </button>
</div>


      {/* GRID LAYOUT FOR ALL CATS */}
      <div className="row justify-content-center">
        {cats.length > 0 ? (
          cats.map((cat) => (
            <div key={cat.id} className="col-lg-3 col-md-4 col-sm-6 mb-4"> 
              {/* Adjusted grid: 4 per row on large screens, 3 on medium, 2 on small */}
              <div 
                className="card shadow-sm text-center bg-white"
                style={{ width: "100%", minHeight: "400px" }} // Cards take full column width
              >
                <img
                  src={cat.image || "https://via.placeholder.com/150"} 
                  alt={cat.name}
                  className="card-img-top" 
                  style={{ height: "200px", objectFit: "cover" }} // Ensures uniform image height
                />
                <div className="card-body">
                  <h5 className="card-title"><strong>{cat.name}</strong></h5>
                  <ul className="list-group list-group-flush text-left">
                    <li className="list-group-item">🌍 {cat.location}</li>
                    <li className="list-group-item">ℹ️ {cat.colour}</li>
                    <li className="list-group-item">🔎 {cat.description}</li>
                  </ul>
                  <div className="d-flex justify-content-between mt-3">
                    <Link 
                      to={`/cats/${cat.id}`} 
                      className="btn btn-primary"
                      style={{
                        backgroundColor: "#29733C",
                        borderColor: "#29733C",
                        color: "white",
                      }}
                    >
                      View Details
                    </Link>
                    <button 
                      onClick={() => handleDelete(cat.id)} 
                      className="btn btn-outline-secondary"
                    >
                      ✖
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
    </div>
  );
}

export default AllCats;
