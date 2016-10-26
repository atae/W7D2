import Redux from "redux";
import { RECEIVE_TODOS, RECEIVE_TODO } from "../actions/todo_actions";
import merge from 'lodash/merge';

const _defaultState = {};

const TodosReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_TODOS:
      let newState = {};
      action.todos.forEach(todo => {
        newState[todo.id] = merge({}, todo);
      });
      return newState;

    case RECEIVE_TODO:
      newState = merge({}, state);
      newState[action.todo.id] = action.todo;
      return newState;

    default:
      return state;
  }
};



export default TodosReducer;
