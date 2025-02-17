import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";

function SingleCat() {
  let { id } = useParams();
  const [cat, setCat] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCatData() {
      try {
        const res = await fetch(`http://localhost:4000/api/cats/${id}`);
        if (!res.ok) throw new Error("Cat not found");
        const data = await res.json();
        setCat(data);
      } catch (err) {
        console.error("Error fetching cat:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    async function fetchComments() {
      try {
        const res = await fetch(`http://localhost:4000/api/comments/cat/${id}`);
        if (!res.ok) throw new Error("Failed to load comments");
        const data = await res.json();
        setComments(data);
      } catch (err) {
        console.error("Error fetching comments:", err);
      }
    }

    fetchCatData();
    fetchComments();
  }, [id]);

  function handleCommentAdded() {
    fetch(`http://localhost:4000/api/comments/cat/${id}`)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.error("Error fetching comments:", err));
  }

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-danger text-center">Error: {error}</p>;

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body text-center">
          <h1 className="card-title">{cat?.name || "Unknown Cat"}</h1>
          <p className="text-muted">📍 {cat?.location || "Unknown location"}</p>
          <p>{cat?.description || "No description available."}</p>
          {cat?.image && (
            <img src={cat.image} alt={cat.name} className="img-fluid mx-auto d-block" width="300" />
          )}
        </div>
      </div>

      <div className="mt-4">
        <CommentList comments={comments} />
        <CommentForm catId={id} onCommentAdded={handleCommentAdded} />
      </div>
    </div>
  );
}

export default SingleCat;


// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import CommentForm from "./CommentForm";
// import CommentList from "./CommentList";

// function SingleCat() {
//   const { id } = useParams();
//   const [cat, setCat] = useState(null);
//   const [comments, setComments] = useState([]);

//   useEffect(() => {
//     async function fetchCat() {
//       try {
//         const res = await fetch(`http://localhost:4000/api/cats/${id}`);
//         const data = await res.json();
//         setCat(data);
//       } catch (err) {
//         console.error("Error fetching cat:", err);
//       }
//     }

//     async function fetchComments() {
//       try {
//         const res = await fetch(`http://localhost:4000/api/comments/cat/${id}`);
//         const data = await res.json();
//         setComments(data);
//       } catch (err) {
//         console.error("Error fetching comments:", err);
//       }
//     }

//     fetchCat();
//     fetchComments();
//   }, [id]);

//   function handleCommentAdded(newComments) {
//     setComments(newComments); // ✅ Update comments when a new one is added
//   }

//   if (!cat) return <p>Loading...</p>;

//   return (
//     <div className="container mt-5">
//       <h2>{cat.name}</h2>
//       <p>{cat.description}</p>
//       <img src={cat.image} alt={cat.name} className="img-fluid" />

//       <CommentList comments={comments} />
//       <CommentForm catId={id} onCommentAdded={handleCommentAdded} />
//     </div>
//   );
// }

// export default SingleCat;








