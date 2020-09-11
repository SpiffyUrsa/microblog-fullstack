import React from 'react'
import PostForm from '../common/PostForm'
import { useDispatch } from "react-redux";
import { addPostToAPI } from "../actionCreators.js";

/** NewPost: Displays the form to create a new post.
 * 
 * App -> Routes -> NewPost
 */
function NewPost() {
  // Setup dispatch hook
  const dispatch = useDispatch();

  /** thunk stuff */
  function handleAddPost(postData) {
    dispatch(addPostToAPI(postData));
  }

  return (
    <PostForm handlePost={handleAddPost} />
  )
}

export default NewPost