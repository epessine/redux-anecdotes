import React from 'react';
import { connect } from 'react-redux';
import { addAnecdote } from '../reducers/anecdoteReducer';
import { setSuccessNotification } from '../reducers/notificationReducer';

const AnecdoteForm = (props) => {
  const create = async (event) => {
    event.preventDefault();
    const content = event.target.content.value;
    event.target.content.value = '';
    props.addAnecdote(content);
    props.setSuccessNotification(
      `you created '${content}'`,
      5000
    );
  };

  return (
    <form onSubmit={create}>
      <h2>create new</h2>
      <div><input name="content"/></div>
      <button>create</button>
    </form>
  );
};

export default connect(
  null,
  { setSuccessNotification,
    addAnecdote
  }
)(AnecdoteForm);