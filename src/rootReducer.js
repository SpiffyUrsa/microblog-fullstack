import { ADD_POST, DELETE_POST, EDIT_POST, GET_POSTS, ADD_COMMENT, DELETE_COMMENT } from './actions.js'
import { getPostsFromAPI } from "./actionCreators";
// Dummy data
const INITIAL_STATE =
{
  posts: {}  
}

//Google when have time: redux combineReducer
function rootReducer(state = INITIAL_STATE, action) {
  // Modifies store based on given action type
  switch (action.type) {
    case GET_POSTS: {
      return { ...state, posts: action.payload }
    }
    case ADD_POST: {
      const postCopy = { ...state.posts }
      const { title, description, body, id, votes } = action.payload
      postCopy[id] = { title, description, body, votes, comments: [] }

      return { ...state, posts: postCopy };
    }
    case EDIT_POST: {
      const { title, description, body, id, votes } = action.payload //new content
      const copyPost = { ...state.posts[id] } //got the exact post, then spread it to shallow copy
      const updatedPost = { title, description, body, votes, comments: copyPost.comments }
      const newPosts = { ...state.posts, [id]: updatedPost } //note: need to review this pattern

      return { ...state, posts: newPosts }
    }
    case DELETE_POST: {
      const id = action.payload;
      const postCopy = { ...state.posts };
      delete postCopy[id];
      return { ...state, posts: postCopy };
    }
    case ADD_COMMENT: {
      const commentData = action.payload[0];
      const postId = action.payload[1];
      const copyPost = { ...state.posts[postId] };
      const updatedPost = { ...copyPost, comments: [...copyPost.comments, commentData] };
      const newPosts = { ...state.posts, [postId]: updatedPost };

      return { ...state, posts: newPosts };
    }

    case DELETE_COMMENT: {
      return;
    }

    default:
      return state;
  }
}

export default rootReducer;