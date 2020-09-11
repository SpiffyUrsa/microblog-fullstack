import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { votePostInAPI, getPostFromAPI } from '../actionCreators'

/** TitleCard: Displays the title and description of a post along with a link
 *  to the full post.
 * 
 * App -> Homepage -> TitleList -> TitleCard
 */

function TitleCard({ title, id, description, votes }) {

  // Find the index of the title using the id.
  
  const dispatch = useDispatch();
  // get the specific title from store
  // use the votes key in that title.


  function handleVote(direction) {
    dispatch(votePostInAPI(id, direction))
  }

  return (
    <div className="TitleCard">
      <div>
        <Link to={`/${id}`}>{title}</Link>
      </div>
      <p>
        {} votes
      </p>
      <p>
        {description}
      </p>
      <p>
        {votes} people like this
        <button onClick={() => handleVote("up")}>
          <i className="fa fa-thumbs-up" />
        </button>
        <button onClick={() => handleVote("down")}>
          <i className="fa fa-thumbs-down" />
        </button>
      </p>
    </div>
  )
}

export default TitleCard