import React from "react";
import PostComment from "./PostComment"
import AddCommentForm from "./AddCommentForm";
import { useDispatch } from "react-redux";

/** CommentsList: Display list of comments and a form to add comments.
 * 
 * Props:
 *  comments: An array of comments like ["comment", ...]
 *  id: a string containing the id of the post the comments belong to.
 * 
 * App -> Routes -> PostDetails -> CommentsList 
 */
function CommentsList({ comments, id }) {
  const dispatch = useDispatch();

  // Deletes the comment
  function deleteComment(){
    //TODO: use dispatch to delete comment in API and store
  }

 // TODO: Question: we're dispatching to change API and the store separately; should we be just changing the API then calling another fn to update store?

  //TODO: USE DISPATCH TO CHANGE COMMENTS IN API AND IN STORE.
  function addComment({ comment }) {
    console.log('magic')
  }


  // Make <PostComments> from [] of comments
  const commentsDisplay = comments.map((comment, idx) => <PostComment deleteComment={deleteComment} text={comment} key={idx} />); //TODO: use stable key later

  return (
    <div className="CommentsList">
      {commentsDisplay}
      <AddCommentForm addComment={addComment} />
    </div>
  )
}

export default CommentsList;