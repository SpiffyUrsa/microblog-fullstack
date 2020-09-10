import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

/** PostForm: Form used to either edit or add a post
 * 
 * State: 
 *  formData: An object containing the form data like {title: "", description: "",...}
 * 
 * Props:
 *  handlePost: A function that handles either the adding or editing of a post.
 * 
 * App -> Routes -> {NewPost, PostDetails} -> PostForm
 */

function PostForm({ handlePost, post }) {

  let initialData = {
    title: "",
    description: "",
    body: ""
  }

  if (post) {
    const { title, description, body } = post;
    initialData = { title, description, body };
  }

  const history = useHistory();

  const [formData, setFormData] = useState(initialData);
  const { title, description, body } = formData;

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handlePost(formData);
    history.push("/");
  }

  return (
    <div className="PostForm">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title: </label>
          <input
            name="title"
            value={title}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description: </label>
          <input
            name="description"
            value={description}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body: </label>
          <input
            name="body"
            value={body}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button className="btn btn-primary">Save</button>
        <Link to="/" className="btn btn-secondary">Cancel</Link>
      </form>
    </div>
  )
}

export default PostForm