import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleCat() {
  let { id } = useParams();
  const [cat, setCat] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/cats/${id}`)
      .then((res) => res.json())
      .then((data) => setCat(data))
      .catch((err) => console.error("Error fetching cat:", err));

    fetch(`http://localhost:5000/api/comments/cat/${id}`)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.error("Error fetching comments:", err));
  }, [id]);

  if (!cat) return <p>Loading...</p>;

  return (
    <div>
      <h1>{cat.name}</h1>
      <p>Location: {cat.location}</p>
      <p>Description: {cat.description}</p>
      <img src={cat.image} alt={cat.name} width="200" />

      <h2>Comments</h2>
      {comments.length > 0 ? (
        comments.map((comment, index) => <p key={index}>{comment.text}</p>)
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
}

export default SingleCat;




