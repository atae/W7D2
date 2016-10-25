import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { requestTodos } from './actions/todo_actions';
import allTodos from './reducers/selector';

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<h1>Todos App</h1>, document.getElementById('content'));

  const store = configureStore();
  window.store = store;
  window.requestTodos = requestTodos;
  window.allTodos = allTodos;
});
