const initialState = {
  message: '',
  type: 'none'
};

const reducer = (state = initialState, { type, data }) => {
  switch (type) {
    case 'SET_NOTIFICATION':
      return data;
    
    case 'HIDE_NOTIFICATION':
      return initialState;

    default: 
      return state;
  }
};

export const setErrorNotification = message => {
  return {
    type: 'SET_NOTIFICATION',
    data: { message, type: 'error' }
  };
};

export const setSuccessNotification = message => {
  return {
    type: 'SET_NOTIFICATION',
    data: { message, type: 'success' }
  };
};

export const hideNotification = () => {
  return {
    type: 'HIDE_NOTIFICATION'
  };
};

export default reducer;