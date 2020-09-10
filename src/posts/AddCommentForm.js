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
  // State
  const initialData = { text: "" }
  const [formData, setFormData] = useState(initialData);

  /** Sync form & data with extra overkill */
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
    setFormData(initialData);
  }

  return (
    <form className="AddCommentForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          name="text"
          value={formData.text}
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