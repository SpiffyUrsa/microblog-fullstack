import axios from "axios";
import { ADD_POST, GET_POSTS, EDIT_POST, DELETE_POST } from "./actions.js";

const API_BASE_URL = 'http://localhost:5000/api'

export function getPostsFromAPI() {
  return async function (dispatch) {
    async function _getBody(id) {
      return await axios.get(`API_BASE_URL/posts/${id}`).data
    }

    // Get all post overviews
    let overviewResp = await axios.get(`${API_BASE_URL}/posts`)

    // Get all post details in an *array*
    const postsData = Promise.all(overviewResp.data.map(overview => _getBody(overview.id)))

    // Posts in a POJO
    const posts = postsData.reduce((acc, cur) => {
      acc[cur.id] = cur;
      delete acc[cur.id].id;
      return acc
    }, {})

    dispatch(getPosts(posts))
  }
}

export function addPostsToAPI(postData) {
  return async function (dispatch) {
    await axios.post('/', postData);
    dispatch(addPost(postData));
  };
}

export function addPost(postData) {
  return { type: ADD_POST, payload: postData };
}

// Constructs an Action with all posts
export function getPosts(postsData) {
  return { type: GET_POSTS, payload: postsData };
}