
import React from 'react';
import { useSelector } from 'react-redux';

const Notification = () => {
  const notification = useSelector(state => state.notification);
  const color = notification.type === 'success' ? 'green' : 'red';
  const style = {
    border: 'solid',
    borderColor: color,
    padding: 10,
    borderWidth: 1
  };
  
  if (notification.type !== 'none') return (
    <div style={style}>
      {notification.message}
    </div>
  );

  return null;
};

export default Notification;