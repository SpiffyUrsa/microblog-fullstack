import { ADD_POST,
         DELETE_POST,
         EDIT_POST,
         GET_POSTS,
         ADD_COMMENT,
         DELETE_COMMENT
       } from './actions.js'

const INITIAL_STATE = { posts: {} }

/** Reducer for updating Redux store */
function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    
    /** Post related actions */
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

    /** Comment-related actions */
    case ADD_COMMENT: {
      const commentData = action.payload[0];
      const postId = action.payload[1];
      const copyPost = { ...state.posts[postId] };
      const updatedPost = { ...copyPost, comments: [...copyPost.comments, commentData] };
      const newPosts = { ...state.posts, [postId]: updatedPost };

      return { ...state, posts: newPosts };
    }
    case DELETE_COMMENT: {
      const { postId, commentId } = action.payload
      const copyComments = [...state.posts[postId].comments]

      // Filter out the unwanted comment
      const filteredComments = copyComments.filter(comment => comment.id !== commentId)

      // Destructure every level then overwriting the key/value pair that leads to the removed comment
      return { ...state, posts: { ...state.posts, [postId]: { ...state.posts[postId], comments: filteredComments } } }
    }

    default:
      return state;
  }
}

export default rootReducer;