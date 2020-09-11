import React from "react";

/** Displays a post comment & a delete button.
 */
function PostComment({ deleteComment, text, commentId }) {

  /** Handles deleting the comment */
  function handleDelete(){
    deleteComment(commentId)
  }

  return (
    <div className="PostComment">
      <button onClick={handleDelete}>Delete</button>
      <p>{text}</p>
    </div>
  )
}

export default PostComment