import { ADD_POST, DELETE_POST, EDIT_POST, GET_POSTS } from './actions.js'

// Dummy data
const INITIAL_STATE =
{
  posts: {
    "testkey1": {
      title: 'title1',
      description: 'description1',
      body: 'body1',
      comments: ['comment1', 'comment2']
    }
  }
}

//Google when have time: redux combineReducer
function rootReducer(state = INITIAL_STATE, action) {
  // Modifies store based on given action type
  switch (action.type) {
    case GET_POSTS: {
      return { ...state, posts: action.payload}
    }
    case ADD_POST: {
      const postCopy = { ...state.posts }
      const { title, description, body, comments, id } = action.payload
      postCopy[id] = { title, description, body, comments }

      return { ...state, posts: postCopy };
    }
    case EDIT_POST: {
      const { title, description, body, id } = action.payload //new content
      const copyPost = { ...state.posts[id] } //got the exact post, then spread it to shallow copy
      const updatedPost = { title, description, body, comments: copyPost.comments }
      const newPosts = { ...state.posts, [id]: updatedPost } //note: need to review this pattern

      return { ...state, posts: newPosts }
    }
    case DELETE_POST: {
      const { id } = action.payload;
      const postCopy = { ...state.posts };
      delete postCopy[id];
      return { ...state, posts: postCopy };
    }
    default:
      return state;
  }
}

export default rootReducer;