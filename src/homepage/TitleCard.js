import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { votePostInAPI, getPostFromAPI } from '../actionCreators'

/** TitleCard: Displays the title and description of a post along with a link
 *  to the full post.
 * 
 * App -> Homepage -> TitleList -> TitleCard
 */

function TitleCard({ title, id, description, votes }) {

  const dispatch = useDispatch()

  function handleVote(direction) {
    dispatch(getPostFromAPI(id)) //TODO: change design
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