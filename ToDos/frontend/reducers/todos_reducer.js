import Redux from "redux";
import { RECEIVE_TODOS, REQUEST_TODOS } from "../actions/todo_actions";
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
    default:
      return state;
  }
};



export default TodosReducer;
