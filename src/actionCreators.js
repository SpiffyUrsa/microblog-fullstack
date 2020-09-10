import axios from "axios";
import { ADD_POST, GET_POSTS, EDIT_POST, DELETE_POST, ADD_COMMENT } from "./actions.js";

const API_BASE_URL = 'http://localhost:5000/api'

export function getPostsFromAPI() {
  return async function (dispatch) {
    async function _getBody(id) {
      let resp = await axios.get(`${API_BASE_URL}/posts/${id}`);
      return resp.data;
    }

    // Get all post overviews
    let overviewResp = await axios.get(`${API_BASE_URL}/posts`)
  
    // Get all post details in an *array*
    const postsData = await Promise.all(overviewResp.data.map(overview => _getBody(overview.id)));
    
    // Posts in a POJO
    const posts = postsData.reduce((acc, cur) => {
      acc[cur.id] = cur;
      delete acc[cur.id].id;
      return acc
    }, {});

    dispatch(getPosts(posts))
  }
}

export function addPostsToAPI(postData) {
  return async function (dispatch) {
    let resp = await axios.post(`${API_BASE_URL}/posts`, postData);
    dispatch(addPost(resp.data));
  };
}

export function deletePostFromAPI(id) {
  return async function (dispatch) {
    let resp = await axios.delete(`${API_BASE_URL}/posts/${id}`);

    // TODO: Add a try catch here instead of checking this manually.
    if (resp.data.message === "deleted") dispatch(deletePost(id));
  }
}

export function editPostInAPI(postData, id) {
  return async function(dispatch) {
    let resp = await axios.put(`${API_BASE_URL}/posts/${id}`, postData);
    dispatch(editPost(resp.data));
  }
}

export function addCommentInAPI(commentData, postId) {
  return async function(dispatch) {
    let resp = await axios.post(`${API_BASE_URL}/posts/${postId}/comments`, commentData);
    dispatch(addComment(resp.data, postId));
  }
}

// Add post action creator
export function addPost(postData) {
  return { type: ADD_POST, payload: postData };
}

// Constructs an Action with all posts
export function getPosts(postsData) {
  return { type: GET_POSTS, payload: postsData };
}

export function deletePost(id) {
  return { type: DELETE_POST, payload: id};
}

export function editPost(postData) {
  return { type: EDIT_POST, payload: postData};
}

export function addComment(commentData, postId) {
  return { type: ADD_COMMENT, payload: [commentData, postId]};
}