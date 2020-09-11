import React, {useEffect} from 'react'
import TitleCard from './TitleCard'
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getTitlesFromAPI } from "../actionCreators";


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

 // design consideration: this could be a more useful component if the component can just take a list of posts to display
// component's real name is AllPostTitleList()
//'where do responsibilities lie"

 function TitleList() {
  const dispatch = useDispatch();
  
  useEffect(function() {
    dispatch(getTitlesFromAPI());
  }, [dispatch]);
  
  // Store - get all posts
  const titles = useSelector(store => store.titles, shallowEqual);
  
  if (titles.length === 0) return "Loading...";

  // Make <TitleCards> from data
  const titleCards = titles.map(post =>
    <TitleCard
      title={post.title}
      description={post.description}
      id={post.id}
      votes={post.votes}
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