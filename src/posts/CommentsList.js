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
function CommentsList({ comments, id}) {

  const commentsDisplay = comments.map((comment, idx) => <PostComment text={comment} key={idx} />);
  const dispatch = useDispatch();

  function addComment({ comment }) {
    // USE DISPATCH TO CHANGE COMMENTS IN API AND IN STORE.
  }

  return (
    <div className="CommentsList">
      {commentsDisplay}
      <AddCommentForm addComment={addComment} />
    </div>
  )
}

export default CommentsList;