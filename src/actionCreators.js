import axios from "axios";
import { ADD_POST, GET_POSTS, EDIT_POST, DELETE_POST } from "./actions.js";

const API_BASE_URL = 'http://localhost:5000/api'

export function getPostsFromAPI() {
  return async function(dispatch) {
    async function _getBody(id){
      return await axios.get(`API_BASE_URL/posts/${id}`).data
    }

    let overviewResp = await axios.get(`${API_BASE_URL}/posts`)
    const postDetails = Promise.all(overviewResp.data.map( overview => _getBody(overview.id)))
    //TODO:

    dispatch(getPosts(resp.data))
/*
  {
    "id": 1,
    "title": "First Post",
    "description": "Best post ever!",
    "body": "Everyone loves posting first. I win!",
    "votes": 0,
    "comments": [
      {
        "id": 1,
        "text": "This is a really great post."
      },
      {
        "id": 2,
        "text": "I learned so much reading this."
      }
    ]
  }
*/
  }
}

export function addPostsToAPI(postData) {
  return async function(dispatch) {
    await axios.post('/', postData);
    dispatch(addPost(postData));
  };
}

export function addPost(postData) {
  return { type: ADD_POST, payload: postData};
}

// Constructs an Action with all posts
export function getPosts(postsData) {
  return { type: GET_POSTS, payload: postsData};
}