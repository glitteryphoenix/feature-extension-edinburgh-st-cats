import { useState } from "react";

function AddComment({ catId, onCommentAdded }) {
  const [comment, setComment] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch(`http://localhost:4000/api/comments/cat/${catId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: comment, author: "User" }),
    });

    if (res.ok) {
      setComment("");
      onCommentAdded(); // ✅ Refresh comments after posting
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment..."
        required
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default AddComment;
