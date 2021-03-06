import { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if(!text) {
      alert('Please enter a valid Todo');
      return
    } 
    
    onAdd({text});
    alert('Todo Added Successfully !');
    setText('');
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-item">
        <label className="form-title">Enter your Todo below</label>
        <input type="text" value={text} placeholder="Type your todo..." className="form-input" onChange={(e) => setText(e.target.value)}></input>
      </div>
      <input type="submit" value="Add Todo" className="form-btn"></input>
    </form>
  )
}

export default AddTodo;
