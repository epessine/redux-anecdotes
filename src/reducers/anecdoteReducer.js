const reducer = (state = [], { type, data }) => {
  switch (type) {
    case 'INIT_ANECDOTES':
      return data;
    case 'VOTE':
      return state.map(anecdote => {
        if (anecdote.id !== data.id) return anecdote;
        return {
          ...anecdote,
          votes: anecdote.votes + 1
        };
      });
    case 'ADD_ANECDOTE':
      return [...state, data];
    default: return state;
  }
};

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes,
  };
};

export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  };
};

export const addAnecdote = (newAnecdote) => {
  return {
    type: 'ADD_ANECDOTE',
    data: newAnecdote
  };
};

export default reducer;