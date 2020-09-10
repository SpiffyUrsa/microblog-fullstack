import React from 'react'
import TitleCard from './TitleCard'
import { useSelector, shallowEqual } from "react-redux";

/** TitleList: Displays cards containing the title and the description 
 *  of a post.
 * 
 *  STORE:
 *    posts: An object with keys of post ids. Each 
 *    key has a value of an object containing info on the post. 
 *    Like {postId: {title:"", description:"", ...}}
 * 
 * App -> Homepage -> TitleList -> TitleCard
 */

function TitleList() {
  // Store - get all posts
  const posts = useSelector(store => store.posts, shallowEqual);

  // Extract title & description from all posts
  let postsData = [];
  for (let key in posts) {
    const { title, description } = posts[key];
    postsData.push({ id: key, title, description })
  }

  // Make <TitleCards> from data
  const titleCards = postsData.map(post =>
    <TitleCard
      title={post.title}
      description={post.description}
      id={post.id}
      key={post.id}
    />
  )

  return (
    <div className="TitleList">
      {titleCards}
    </div>
  )
}

export default TitleList