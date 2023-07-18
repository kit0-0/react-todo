import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@mui/material';
import TodoItem from './TodoItem';

const Itemscontainer = ({ todos, handleChange, delTodo }) => (
  <List>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        itemProp={todo}
        handleChange={handleChange}
        delTodo={delTodo}
      />
    ))}
  </List>
);

Itemscontainer.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default Itemscontainer;
