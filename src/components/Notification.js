
import React from 'react';
import { connect } from 'react-redux';

const Notification = (props) => {
  const notification = props.notification;
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

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
};

export default connect(
  mapStateToProps
)(Notification);