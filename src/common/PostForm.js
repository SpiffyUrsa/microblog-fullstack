import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";


function PostForm({ handlePost }){
  
  const history = useHistory();

  const initialData = {
    title: "",
    description: "",
    body: ""
  }
  const [formData, setFormData] = useState(initialData);
  const { title, description, body } = formData;

  function handleChange(evt) {
    const {name, value} = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    history.push("/");
  }

  return(
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