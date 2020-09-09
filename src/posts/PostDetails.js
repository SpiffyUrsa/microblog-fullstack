import React, { useState } from 'react'
import PostForm from "../common/PostForm";
import {useHistory, useParams } from "react-router-dom"
import CommentsList from "./CommentsList";

function PostDetails() {

  const { id } = useParams();

  // TODO: access store and find the post by id. Populate
  // information afterwards

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