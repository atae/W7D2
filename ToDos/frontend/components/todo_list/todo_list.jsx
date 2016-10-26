import React from 'react';
import todoListItem from './todo_list_item';
import TodoListForm from './todo_form';

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    return (
      <div>
        <ul>
          {todoListItem(this.props.todos)}
        </ul>

        <TodoListForm createTodo={this.props.createTodo}/>
      </div>
    );
  }
}

export default Todo;
