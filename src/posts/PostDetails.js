import React, { useState } from 'react'
import PostForm from "../common/PostForm";
import { useHistory, useParams } from "react-router-dom"
import CommentsList from "./CommentsList";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

/** PostDetails: Displays a blog post.
 * 
 * State: 
 *  showEdit: Boolean that determines whether to show the edit form or not.
 *   
 * Store:
 *  post: An object containing post data like { title: "", description: "", ...}
 * 
 * App -> Routes -> PostDetails (-> PostForm, CommentsList)
 */


function PostDetails() {
  // State
  const [showEdit, setShowEdit] = useState(false);

  // Setup: URL parameter, history, dispatch()
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  // Store
  const post = useSelector(state => state.posts[id], shallowEqual);

  // Destructure post from store
  const { title, description, body, comments } = post;

  // Shows the edit post form
  function handleEdit(evt) {
    setShowEdit(true);
  }

  // Dispatches to update post in API and Store
  function handleEditPost(postData) {
    //FIXME:
    history.push(`/${id}`);
  }

  // Dispatches to delete post in API and Store
  function handleDelete(evt) {
    //FIXME:
    history.push("/");
  }

  //Show PostForm for edit OR post+CommentsList
  const postDisplay = showEdit ?
    <PostForm handlePost={handleEditPost} post={post} /> :
    <>
      <h2>{title}</h2>
      <h4><em>{description}</em></h4>
      <p>{body}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <hr />
      <h2>Comments</h2>
      <CommentsList comments={comments} postId={id} />
    </>

  return (
    <div className="PostDetails">
      {postDisplay}
    </div>
  )
}

export default PostDetails