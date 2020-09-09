import React, {useState} from 'react'
import TitleList from './TitleList'

function Homepage() {

  // State
  const [posts, setPosts] = useState([{
    title: "title",
    description:"description",
    id:1
  },
  {
    title: "title2",
    description:"description2",
    id: 2
  }])

  return (
    <div className="Homepage">
      <TitleList posts={posts} />
    </div>
  )
}

export default Homepage