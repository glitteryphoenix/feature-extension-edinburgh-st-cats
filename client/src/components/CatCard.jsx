import { Link } from "react-router-dom";
import "../styles.css";

function CatCard({ cat }) {
  return (
    <div className="cat-card">
      {/* ✅ Display the cat image */}
      <img 
        src={cat.image || "https://placekitten.com/300/200"} 
        alt={cat.name} 
        className="cat-img"
      />
      
      {/* ✅ Display cat info */}
      <div className="cat-info">
        <h3>{cat.name}</h3>
        <p><strong>📍 {cat.location}</strong></p>

        {/* ✅ Styled "View Details" Button */}
        <Link to={`/cats/${cat.id}`} className="btn btn-primary">View Details</Link>
      </div>
    </div>
  );
}

export default CatCard;

