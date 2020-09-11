import React from 'react'
import { Link } from 'react-router-dom'

/** TitleCard: Displays the title and description of a post along with a link
 *  to the full post.
 * 
 * App -> Homepage -> TitleList -> TitleCard
 */

function TitleCard({ title, id, description, votes }) {
  return (
    // TODO: ADD VOTES DISPLAY AND BUTTONS
    <div className="TitleCard">
      <div>
        <Link to={`/${id}`}>{title}</Link>
      </div>
      <p>
        <em>
          {description}
        </em>
      </p>
    </div>
  )
}

export default TitleCard