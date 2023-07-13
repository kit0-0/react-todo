import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Addinput from './Addinput';
import Itemscontainer from './Itemscontainer';

const Todocontainer = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [
      {
        id: uuidv4(),
        title: 'Add task',
        completed: false,
      },
    ];
  });

  const [message, setMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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

  const handleChange = (id, updatedTitle) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: updatedTitle,
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
        <Addinput handleSubmit={addTodoItem} message={message} />
        <Itemscontainer
          todos={todos}
          delTodo={delTodo}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Todocontainer;
