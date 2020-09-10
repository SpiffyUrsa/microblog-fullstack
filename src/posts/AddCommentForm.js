import React, { useState } from "react";

/** AddCommentForm: Form to add a new comment
 * 
 * State:
 *  formData: An object containing the comment.
 * 
 * Props:
 *  addComment: A function that adds the comment to the API and store. 
 */

function AddCommentForm({ addComment }) {

  //TODO:
  // const initialData = { comment: "" };

  // State
  const [formData, setFormData] = useState({ comment: "" });
  // const [formData, setFormData] = useState(initialData);
  
  /** Sync form & data */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));

  }

  /** Adds a comment to API+state */
  function handleSubmit(evt) {
    evt.preventDefault();
    addComment(formData);
    //setFormData(initialData);
    evt.target.reset()
  }

  return (
    <form className="AddCommentForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          name="comment"
          value={formData.comment}
          placeholder="New Comment"
          className="form-control"
          onChange={handleChange}
          required
        />
      </div>
      <button>Add</button>
    </form>
  )
}

export default AddCommentForm;