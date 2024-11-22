// Import necessary components and hooks from React and uuid library
import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
// Generate a unique ID using uuidv4
uuidv4();

// Define the TodoWrapper functional component
export const TodoWrapper = () => {
  // Initialize the todos state with an empty array
  const [todos, setTodos] = useState([]);

  // Function to add a new todo to the todos state
  const addTodo = (todo) => {
    setTodos([
      // Spread the existing todos array and add a new todo object
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    // Log the updated todos array to the console
    console.log(todos);
  };

  // Function to toggle the completion status of a todo
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        // If the todo's ID matches the given ID, create a new object with the updated completed status
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  // Return the JSX to render the TodoWrapper component
  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      {/* Render the TodoForm component with the addTodo function passed as a prop */}
      <TodoForm addTodo={addTodo} />
      {/* Map through the todos array and render each Todo component with the corresponding todo object, toggleComplete function, and a unique key */}
      {todos.map((todo, index) =>
        // If the todo is being edited, render the Todo component with the isEditing prop set to true
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={index}
            task={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};
