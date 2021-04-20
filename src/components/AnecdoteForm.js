import React from 'react';
import { useDispatch } from 'react-redux';
import { addAnecdote } from '../reducers/anecdoteReducer';

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const create = (event) => {
    event.preventDefault();
    const content = event.target.content.value;
    dispatch(addAnecdote(content));
  };

  return (
    <form onSubmit={create}>
      <h2>create new</h2>
      <div><input name="content"/></div>
      <button>create</button>
    </form>
  );
};

export default AnecdoteForm;