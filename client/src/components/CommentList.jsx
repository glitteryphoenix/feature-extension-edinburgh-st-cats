function CommentList({ comments }) {
  return (
    <div className="card mt-4 p-3 shadow">
      <h3>Comments</h3>
      {comments.length === 0 ? (
        <p>No comments yet. Be the first to comment!</p>
      ) : (
        <ul
          className="list-group list-group-flush"
          style={{ maxWidth: "800px" }}
        >
          {comments.map((comment) => (
            <li
              key={comment.id}
              className="list-group-item"
              style={{ maxWidth: "800px" }}
            >
              <div className="d-flex justify-content-between">
                <p className="w-80">{comment.comment_text}</p>
                <em className="w-10 text-right"> - {comment.author}</em>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CommentList;
