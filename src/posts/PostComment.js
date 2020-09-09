import React from "react";


function PostComment({ text }) {
  return (
    <div className="PostComment">
      <button>X</button>
      <p>{text}</p>
    </div>
  )
}

export default PostComment