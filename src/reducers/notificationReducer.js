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

export const setErrorNotification = (message, time) => {
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: { message, type: 'error' }
    });
    setTimeout(() => dispatch(hideNotification()), time);
  };
};

export const setSuccessNotification = (message, time) => {
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: { message, type: 'success' }
    });
    setTimeout(() => dispatch(hideNotification()), time);
  };
};

export const hideNotification = () => {
  return {
    type: 'HIDE_NOTIFICATION'
  };
};

export default reducer;