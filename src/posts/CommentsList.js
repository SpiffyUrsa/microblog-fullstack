import React from "react";
import PostComment from "./PostComment"
import AddCommentForm from "./AddCommentForm";
import { useDispatch } from "react-redux";
import { addCommentInAPI, deleteCommentInAPI} from "../actionCreators";

/** CommentsList: Display list of comments and a form to add comments.
 * 
 * Props:
 *  comments: An array of comments like ["comment", ...]
 *  id: a string containing the id of the post the comments belong to.
 * 
 * App -> Routes -> PostDetails -> CommentsList 
 */
function CommentsList({ comments, postId }) {
  const dispatch = useDispatch();

  // Deletes the comment
  function deleteComment(commentId){
    dispatch(deleteCommentInAPI(postId, commentId))
  }

  // Adds a comment
  function addComment(commentData) {
    dispatch(addCommentInAPI(commentData, postId));
  }


  // Make <PostComments> from [] of comments
  const commentsDisplay = comments.map((comment, idx) => 
    <PostComment 
      deleteComment={deleteComment} 
      text={comment.text}
      key={comment.id}
      commentId={comment.id}
    />);

  return (
    <div className="CommentsList">
      {commentsDisplay}
      <AddCommentForm addComment={addComment} />
    </div>
  )
}

export default CommentsList;