import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ListItem, Checkbox, IconButton, Typography, TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TodoItem = ({ itemProp, handleChange, delTodo }) => {
  const [editing, setEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(itemProp.title);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleTitleChange = (e) => {
    setUpdatedTitle(e.target.value);
  };

  const handleBlur = () => {
    setEditing(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleChange(itemProp.id, updatedTitle);
    setEditing(false);
  };

  return (
    <ListItem disablePadding>
      {!editing ? (
        <>
          <Checkbox
            checked={itemProp.completed}
            onChange={() => handleChange(itemProp.id, itemProp.title)}
          />
          <IconButton onClick={() => delTodo(itemProp.id)}>
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={handleEditing}>
            <EditIcon />
          </IconButton>
          <Typography variant="body1">{itemProp.title}</Typography>
        </>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <TextField
            type="text"
            value={updatedTitle}
            onChange={handleTitleChange}
            autoFocus
            fullWidth
            variant="outlined"
            onBlur={handleBlur}
            label="Edit Todo"
            aria-label="Edit Todo"
          />
          <button type="submit" style={{ display: 'none' }} aria-hidden="true" />
        </form>
      )}
    </ListItem>
  );
};

TodoItem.propTypes = {
  itemProp: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoItem;
