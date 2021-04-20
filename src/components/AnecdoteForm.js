import React from 'react';
import { useDispatch } from 'react-redux';
import { addAnecdote } from '../reducers/anecdoteReducer';
import { setSuccessNotification, hideNotification } from '../reducers/notificationReducer';

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const create = async (event) => {
    event.preventDefault();
    const content = event.target.content.value;
    event.target.content.value = '';
    dispatch(addAnecdote(content));
    dispatch(setSuccessNotification(
      `you created '${content}'`,
      5000
    ));
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