import React from 'react';
import Anecdote from './Anecdote';
import { useSelector, useDispatch } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { setSuccessNotification, hideNotification } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector(state => 
    state.anecdotes.sort((a, b) => b.votes - a.votes)
  );
  const dispatch = useDispatch();

  const vote = (id, content) => {
    dispatch(voteAnecdote(id));
    dispatch(setSuccessNotification(
      `you voted for '${content}'`
    ));
    setTimeout(() => dispatch(hideNotification()), 5000);
  };

  return (
    <div>
      {anecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          voteHandler={vote}
        />
      )}
    </div>
  );
};

export default AnecdoteList;