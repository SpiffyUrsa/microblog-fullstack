import React, { useState } from 'react'
import PostForm from "../common/PostForm";
import {useHistory, useParams } from "react-router-dom"
import CommentsList from "./CommentsList";

/** Displays a blog post.
 */
function PostDetails() {

  const { id } = useParams();

  // TODO: access store: grab post by id (includes comments)

// [{
//   title:
//   description:
//   body:
//   comments: []
// }]

  const [showEdit, setShowEdit] = useState(false);
  const history = useHistory();

  function handleEdit(evt) {
    setShowEdit(true);
  }

  function handlePost(postData) {
 // Edit the post here.
  }

  function handleDelete(evt) {

    history.push("/");
  }

  //Show PostForm for edit OR post+CommentsList
  const postDisplay = showEdit ?
    <PostForm handlePost={handlePost} /> :
    <>
      <h2>Title</h2>
      <h4><em>Description</em></h4>
      <p>This is the body</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <hr />
      <h2>Comments</h2>
      <CommentsList />
    </>

  return (
    <div className="PostDetails">
      {postDisplay}
    </div>
  )
}

export default PostDetails