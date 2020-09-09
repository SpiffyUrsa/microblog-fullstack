import React from 'react'
import TitleCard from './TitleCard'

//gets store here


function TitleList({ posts }) {
  const titleCards = posts.map(post => (
    <TitleCard
      title={post.title}
      description={post.description}
      id={post.id}
      key={post.id}
    />)
  )

  return (
    <div className="TitleList">
      {titleCards}
    </div>
  )
}

export default TitleList