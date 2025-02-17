function CommentList({ comments }) {
    return (
      <div className="card mt-4 p-3 shadow">
        <h3>Comments</h3>
        {comments.length === 0 ? (
          <p>No comments yet. Be the first to comment!</p>
        ) : (
          <ul className="list-group">
            {comments.map((comment) => (
              <li key={comment.id} className="list-group-item">
                <strong>{comment.title}</strong> by {comment.username}
                <p>{comment.comment}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default CommentList;
  
  