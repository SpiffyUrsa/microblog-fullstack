import React from "react";

/** Displays a post comment & a delete button.
 */
function PostComment({ deleteComment, text }) {
  return (
    <div className="PostComment">
      <button>Delete</button>
      <p onClick={deleteComment}>{text}</p>
    </div>
  )
}

export default PostComment