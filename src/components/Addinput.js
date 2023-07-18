import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, Typography } from '@mui/material';

const Addinput = ({ handleSubmit, message }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(input);
    setInput('');
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className="form-container">
        <TextField
          type="text"
          value={input}
          onChange={handleInputChange}
          label="Add todo..."
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary">
          Add List
        </Button>
      </form>
      <Typography variant="subtitle2" color="error">
        {message}
      </Typography>
    </>
  );
};

Addinput.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default Addinput;
