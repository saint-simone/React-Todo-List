// Importing React and useState from the 'react' library
import React, { useState } from "react";

// Defining a functional component named EditTodoForm
// This component receives two props: editTodo and task
export const EditTodoForm = ({ editTodo, task }) => {
  // Using the useState hook to create a state variable 'value' and a function to update it 'setValue'
  // The initial value of 'value' is set to the 'task' prop
  const [value, setValue] = useState(task.task);

  // Defining a function 'handleSubmit' that will be called when the form is submitted
  const handleSubmit = (e) => {
    // Preventing the default form submission behavior
    e.preventDefault();

    // Calling the 'editTodo' prop with the updated 'value' and the 'id' of the task
    editTodo(value, task.id);

    // Resetting the 'value' state to an empty string
    setValue("");
  };

  // Returning the JSX for the EditTodoForm component
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};
