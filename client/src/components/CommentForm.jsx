// import { useState } from "react";

// function CommentForm({ catId, onCommentAdded }) {
//   const [formData, setFormData] = useState({
//     title: "",
//     comment: "",
//     username: ""
//   });

//   const [error, setError] = useState(null);

//   function handleChange(e) {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setError(null);

//     if (!formData.title || !formData.comment || !formData.username) {
//       setError("All fields are required.");
//       return;
//     }

//     try {
//       const res = await fetch(`http://localhost:4000/api/comments/cat/${catId}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (!res.ok) {
//         const errorData = await res.json();
//         throw new Error(errorData.error || "Failed to post comment.");
//       }

//       setFormData({ title: "", comment: "", username: "" }); // ✅ Clear form on success
//       onCommentAdded(); // ✅ Refresh comments list
//     } catch (err) {
//       setError(err.message);
//     }
//   }

//   return (
//     <div className="card mt-4 p-3 shadow">
//       <h3>Leave a Comment</h3>
//       {error && <p className="text-danger">{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <input type="text" className="form-control mb-2" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
//         <textarea className="form-control mb-2" name="comment" placeholder="Comment" value={formData.comment} onChange={handleChange} required />
//         <input type="text" className="form-control mb-2" name="username" placeholder="Your Name" value={formData.username} onChange={handleChange} required />
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default CommentForm;

import { useState } from "react";

function CommentForm({ catId, onCommentAdded }) {
  const [formData, setFormData] = useState({
    title: "",
    comment: "",
    username: ""
  });

  const [error, setError] = useState(null);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    console.log("Submitting comment:", formData); // ✅ Debugging log

    try {
      const res = await fetch(`http://localhost:4000/api/comments/cat/${catId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", res.status); // ✅ Debugging log

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to post comment.");
      }

      const newComments = await res.json();
      console.log("✅ Updated comments:", newComments); // ✅ Debugging log

      setFormData({ title: "", comment: "", username: "" }); // ✅ Clear form
      onCommentAdded(newComments); // ✅ Update the comments list in parent component
    } catch (err) {
      console.error("Error:", err);
      setError(err.message);
    }
  }

  return (
    <div className="card mt-4 p-3 shadow">
      <h3>Leave a Comment</h3>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          className="form-control mb-2"
          name="comment"
          placeholder="Comment"
          value={formData.comment}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          className="form-control mb-2"
          name="username"
          placeholder="Your Name"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default CommentForm;

