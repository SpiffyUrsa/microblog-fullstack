import React, {useState} from "react";

function AddCommentForm() {
  
  const initialData = { comment: "" };
  const [formData, setFormData] = useState(initialData);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));

  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setFormData(initialData);
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