const reducer = (state = '', { type, data }) => {
  switch (type) {
    case 'SET_FILTER':
      return data;
    
    case 'RESET_FILTER':
      return '';

    default: 
      return state;
  }
};

export const setFilter = filter => {
  return {
    type: 'SET_FILTER',
    data: filter
  };
};

export const resetFilter = () => {
  return {
    type: 'RESET_FILTER'
  };
};

export default reducer;