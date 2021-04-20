import anecdoteService from '../services/anecdotes';

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

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    });
  };
};

export const voteAnecdote = (id) => {
  return async dispatch => {
    await anecdoteService.addVote(id);
    dispatch({
      type: 'VOTE',
      data: { id }
    });
  };
};

export const addAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch({
      type: 'ADD_ANECDOTE',
      data: newAnecdote
    });
  };
};

export default reducer;