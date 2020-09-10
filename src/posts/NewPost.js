import React from 'react'
import PostForm from '../common/PostForm'
import { useDispatch } from "react-redux";
import { addPostsToAPI } from "../actionCreators.js";

/** NewPost: Displays the form to create a new post.
 * 
 * App -> Routes -> NewPost
 */

function NewPost() {
  const dispatch = useDispatch();
  
  function handleAddPost(postData) {
    dispatch(addPostsToAPI(postData));
  }

  return (
    <PostForm handlePost={handleAddPost} />
  )
}

export default NewPost