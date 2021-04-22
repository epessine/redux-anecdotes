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

let lastTimeout;
export const setErrorNotification = (message, time) => {
  clearTimeout(lastTimeout);
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: { message, type: 'error' }
    });
    lastTimeout = setTimeout(() => dispatch(hideNotification()), time);
  };
};

export const setSuccessNotification = (message, time) => {
  clearTimeout(lastTimeout);
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: { message, type: 'success' }
    });
    lastTimeout = setTimeout(() => dispatch(hideNotification()), time);
  };
};

export const hideNotification = () => {
  return {
    type: 'HIDE_NOTIFICATION'
  };
};

export default reducer;