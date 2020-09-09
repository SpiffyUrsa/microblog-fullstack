import React from "react";
import PostComment from "./PostComment"
import AddCommentForm from "./AddCommentForm";

/** Display list of comments and 
 * 
 */
function CommentsList() {

  const FAKE_POSTS = 
    {
      id: 1,
      title:"Hello",
      description: "World",
      body: "yeet",
      comments: ["wtf", "noob"]
    }

  const comments = FAKE_POSTS.comments.map((comment, idx) => <PostComment text={comment} key={idx} />);

  return (
    <div className="CommentsList">
      {comments}
      <AddCommentForm />
    </div>
  )
}

export default CommentsList;