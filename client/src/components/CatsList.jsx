import { useState, useEffect } from "react";

function CatsList() {
  const [cats, setCats] = useState([]); // Store fetched cat data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    fetch("http://localhost:4000/api/cats") // Update the port if needed
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch cats");
        }
        return response.json();
      })
      .then((data) => {
        setCats(data); // Store fetched data
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // Runs only once on component mount

  if (loading) return <p>Loading cats...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>🐱 Available Cats</h2>
      {/*SEARCH FOR CATS BY LOCATION*/}
      <ul>
        {cats.map((cat) => (
          <li key={cat.id}>
            <h3>{cat.name}</h3>
            <p>Location: {cat.location}</p>
            <p>Color: {cat.colour}</p>
            {cat.image && <img src={cat.image} alt={cat.name} width="150" />}
            <p>{cat.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CatsList;

