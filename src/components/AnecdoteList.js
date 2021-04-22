import React from 'react';
import Anecdote from './Anecdote';
import { useSelector, useDispatch } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { setSuccessNotification } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const filter = useSelector(state => state.filter);
  const anecdotes = useSelector(state => {
    const filtered = filter
      ? state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter))
      : state.anecdotes;
    return filtered.sort((a, b) => b.votes - a.votes);
  });
  const dispatch = useDispatch();

  const vote = (id, content) => {
    dispatch(voteAnecdote(id));
    dispatch(setSuccessNotification(
      `you voted for '${content}'`,
      5000
    ));
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