import React, { useState, useEffect } from 'react'
import PostForm from "../common/PostForm";
import { useHistory, useParams, Redirect } from "react-router-dom"
import CommentsList from "./CommentsList";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { deletePostFromAPI, editPostInAPI, getPostFromAPI } from "../actionCreators";


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

  useEffect(function() {
    dispatch(getPostFromAPI(id));
  }, [dispatch, id])

  // Store
  const posts = useSelector(state => state.posts, shallowEqual);
  
  if (Object.values(posts).length === 0) return "Loading...";
  if (posts[id] === undefined) {
    return <Redirect to="/notfound" />;
  }

  // Destructure post from store
  const { title, description, body, comments } = posts[id];

  // Shows the edit post form
  function handleEdit(evt) {
    setShowEdit(true);
  }

  // Dispatches to update post in API and Store
  function handleEditPost(postData) {
    dispatch(editPostInAPI(postData, id));
    history.push(`/${id}`);
  }

  // Dispatches to delete post in API and Store
  function handleDelete(evt) {
    dispatch(deletePostFromAPI(id));
    history.push("/");
  }

  //Show PostForm for edit OR post+CommentsList
  const postDisplay = showEdit ?
    <PostForm handlePost={handleEditPost} post={posts[id]} /> :
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