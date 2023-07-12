import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Addinput from './Addinput';
import Itemscontainer from './Itemscontainer';

const Todocontainer = () => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: 'Add task',
      completed: false,
    },
  ]);

  const [message, setMessage] = useState('');

  const addTodoItem = (title) => {
    if (title.trim()) {
      const newItem = {
        id: uuidv4(),
        title,
        completed: false,
      };
      setTodos((prevState) => [...prevState, newItem]);
      setMessage('');
    } else {
      setMessage('You have to add something!!');
    }
  };

  const handleSubmit = (input) => {
    addTodoItem(input);
  };

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const delTodo = (id) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div style={{ marginTop: '20px' }}>
        <Addinput handleSubmit={handleSubmit} message={message} />
        <Itemscontainer todos={todos} delTodo={delTodo} handleChange={handleChange} />
      </div>
    </div>
  );
};

export default Todocontainer;
