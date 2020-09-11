import React from "react";
import { useDispatch } from "react-redux";
import { votePostInAPI } from "../actionCreators";

/** PostVotes: Displays an area where users can upvote or downvote a post.
 * 
 * Props:
 *  postId: The id of the post that this voting area references.
 *  votes: The number of votes this post has.
 * 
 * 
 * {TitleList, PostDetails} -> PostVotes
 */

function PostVotes({postId, votes}) {

  const dispatch = useDispatch();

  function handleVote(direction) {
    dispatch(votePostInAPI(postId, direction))
  }
// CR: Consider making two separate methods for handling upvoting and handling downvoting.
// Creating new functions every time this is run.
  return (
    <p>
      {votes} people like this
      <button onClick={() => handleVote("up")}>
        <i className="fa fa-thumbs-up" />
      </button>
      <button onClick={() => handleVote("down")}>
        <i className="fa fa-thumbs-down" />
      </button>
    </p>
  )
}

export default PostVotes;