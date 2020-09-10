import React from "react";
import PostComment from "./PostComment"
import AddCommentForm from "./AddCommentForm";
import { useDispatch } from "react-redux";

/** CommentsList: Display list of comments and a form to add comments.
 * 
 * 
 * 
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