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
    <div
      // className="container mt-4"
      style={{ backgroundColor: "#d9d9d9", minHeight: "1000vh" }} // Background color of the page
    >
      {/* <h1 className="text-center mb-4">Cats of Edinburgh</h1> */}

      {/* MAP */}
      <div className="mb-4">
        <Map cats={cats} />
      </div>

 {/*ADD CAT BUTTON*/}
 <div className="text-center mt-4">
        <Link to="/add-cat" className="btn btn-success">Add New Cat</Link>
      </div>
   
      {/* GRID LAYOUT FOR ALL CATS */}
      <div className="row justify-content-center">
        {cats.length > 0 ? (
          cats.map((cat) => (
            <div key={cat.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card shadow-sm text-center cat-card bg-white" style={{ width: "18rem" }}> {/* Custom card width */}
                <img
                  src={cat.image || "https://via.placeholder.com/150"} 
                  alt={cat.name}
                  className="card-img-top" 
                  style={{objectFit: "cover"}}
                />
                <div className="card-body">
                  <h5 className="card-title"><strong>{cat.name}</strong></h5>
                  <ul className="list-group list-group-flush text-left">
                    <li className="list-group-item">🌍 {cat.location}</li>
                    <li className="list-group-item">ℹ️ {cat.colour}</li>
                    <li className="list-group-item">🔎 {cat.description}</li>
                  </ul>
                  <div className="d-flex justify-content-between mt-3">
                    <Link to={`/cats/${cat.id}`} className="btn btn-primary"  style={{
              backgroundColor: "#29733C",
              borderColor: "#29733C",
              color: "white",
            }}>
                      View Details
                    </Link>
                    <button onClick={() => handleDelete(cat.id)} className="btn btn-outline-secondary">
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
