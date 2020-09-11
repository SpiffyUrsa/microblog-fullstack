import React from 'react'
import { Link } from 'react-router-dom'
import PostVotes from "../common/PostVotes";

/** TitleCard: Displays the title and description of a post along with a link
 *  to the full post.
 * 
 * App -> Homepage -> TitleList -> TitleCard
 */

function TitleCard({ title, id, description, votes }) {
  
  return (
    <div className="TitleCard">
      <div>
        <Link to={`/${id}`}>{title}</Link>
      </div>
      <p>
        {description}
      </p>
      <PostVotes postId={id} votes={votes} />
    </div>
  )
}

export default TitleCard