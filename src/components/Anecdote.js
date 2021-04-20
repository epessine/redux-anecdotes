import React from 'react';

const Anecdote = ({ anecdote, voteHandler }) => {
  return (
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => voteHandler(anecdote.id, anecdote.content)}>vote</button>
      </div>
    </div>
  );
};

export default Anecdote;