import React from 'react'
import { Link } from 'react-router-dom'

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
      </p>
    </div>
  )
}

export default TitleCard