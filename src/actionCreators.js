import axios from "axios";
import {
  GET_TITLES,
  VOTE_POST,
  GET_POST,
  EDIT_POST,
  ADD_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from "./actions.js";

const API_BASE_URL = 'http://localhost:5000/api'
/** Post-related thunks */
export function votePostInAPI(postId, voteDirection) {
  return async function (dispatch) {
    const resp = await axios.post(`${API_BASE_URL}/posts/${postId}/vote/${voteDirection}`)
    dispatch(votePost(postId, resp.data))
  }
}

export function getTitlesFromAPI() {
  return async function (dispatch) {
    const resp = await axios.get(`${API_BASE_URL}/posts`);
    dispatch(getTitles(resp.data))
  }
}

export function getPostFromAPI(id) {
  return async function (dispatch) {
    const resp = await axios.get(`${API_BASE_URL}/posts/${id}`);
    dispatch(getPost(resp.data));
  }
}

export function addPostToAPI(postData) {
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
  return async function (dispatch) {
    let resp = await axios.put(`${API_BASE_URL}/posts/${id}`, postData);
    dispatch(editPost(resp.data));
  }
}

/** Comment-related thunks */
export function addCommentInAPI(commentData, postId) {
  return async function (dispatch) {
    let resp = await axios.post(`${API_BASE_URL}/posts/${postId}/comments`, commentData);
    dispatch(addComment(resp.data, postId));
  }
}

export function deleteCommentInAPI(postId, commentId) {
  return async function (dispatch) {
    await axios.delete(`${API_BASE_URL}/posts/${postId}/comments/${commentId}`)
    dispatch(deleteComment(postId, commentId))
  }
}



/** Post-related action creators */
export function getTitles(postsData) {
  return { type: GET_TITLES, payload: postsData };
}

export function getPost(postData) {
  return { type: GET_POST, payload: postData }
}

export function addPost(postData) {
  return { type: ADD_POST, payload: postData };
}

export function deletePost(id) {
  return { type: DELETE_POST, payload: id };
}

export function editPost(postData) {
  return { type: EDIT_POST, payload: postData };
}

export function votePost(postId, voteData){
  return { type: VOTE_POST, payload: { postId, votes: voteData.votes } }
}



/** Comment-related action creators */
// CR: Use an object for the payload. Easier to figure out by reading the code what the values
// are. 
export function addComment(commentData, postId) {
  return { type: ADD_COMMENT, payload: {commentData, postId} };
}

export function deleteComment(postId, commentId) {
  return { type: DELETE_COMMENT, payload: { postId, commentId } };
}