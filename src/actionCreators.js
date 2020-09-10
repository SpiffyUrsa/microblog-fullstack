import axios from "axios";
import { ADD_POST, EDIT_POST, DELETE_POST } from "./actions.js";

// export function getPostsFromAPI() {
//   return async function(dispatch) {
//     let res = await axios.get('/');
//   }
// }


export function addPostsToAPI(postData) {
  return async function(dispatch) {
    await axios.post('/', postData);
    dispatch(addPost(postData));
  };
}

export function addPost(postData) {
  return { type: ADD_POST, payload: postData};
}