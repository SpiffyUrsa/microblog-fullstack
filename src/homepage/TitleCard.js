import React from 'react'
import { Link } from 'react-router-dom'

/** TitleCard: Displays the title and description of a post along with a link
 *  to the full post.
 * 
 * App -> Homepage -> TitleList -> TitleCard
 */

function TitleCard({ title, id, description }) {
  return (
    <div className="TitleCard">
      <div>
        <Link to={`/${id}`}>{title}</Link>
      </div>
      <p>
        <em>
          {description}
        </em>
      </p>Ï
    </div>
  )
}

export default TitleCard