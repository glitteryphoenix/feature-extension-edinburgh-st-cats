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
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this cat?"
    );
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
      className="container w-100 "
      style={{ minHeight: "50vh", padding: "20px" }}
    >
      {/* SEARCH BY LOCATION */}
      <span>
        <div
          className=" searchByLocation d-flex align-items-center gap-3 py-3 card shadow-sm"
          style={{
            backgroundColor: "#d9d9d9",
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          <h5 className="mb-0" style={{ flex: "1" }}>
            Search for cats in your neighborhood!
          </h5>
          <LocationDropDownMenu
            handleChange={(e) => setLocation(e.target.value)}
            className="form-select form-select-sm "
          />
          <button
            onClick={fetchCatsByLocation}
            className="btn btn-success"
            style={{ fontSize: "1rem", width: "100px" }}
          >
            Search
          </button>
        </div>
      </span>

      <div className="mb-4" />

      {/* MAP */}
      <div className="mb-4">
        <Map cats={cats} />
      </div>

      {/* ADD CAT BUTTON */}
      <div className="text-center my-4">
        <Link
          to="/add-cat"
          className="btn btn-success btn px-4 py-3"
          style={{ fontSize: "1.2rem" }}
        >
          Add New Cat
        </Link>
      </div>

      {/* GRID LAYOUT FOR ALL CATS */}
      <div className="row justify-content-center">
        {cats.length > 0 ? (
          cats.map((cat) => (
            <div key={cat.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div
                className="card shadow-sm text-center bg-white"
                style={{
                  width: "100%",
                  minHeight: "400px",
                  paddingTop: "15px",
                }}
              >
                <img
                  src={cat.image || "https://via.placeholder.com/150"}
                  alt={cat.name}
                  className="card-img-top"
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                    margin: "auto",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>{cat.name}</strong>
                  </h5>
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
