import React from 'react';
import todoListItem from './todo_list_item';

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
      </div>
    );
  }
}

export default Todo;
