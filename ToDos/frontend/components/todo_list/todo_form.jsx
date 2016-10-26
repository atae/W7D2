import React from 'react';

class TodoListForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: {
        title: "",
        body: "",
        done: "false"
      }
    };

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    e.preventDefault();

    let newTitle = document.getElementById('title');
    let newBody = document.getElementById('body');
    let newDone = document.getElementById('done');
    this.props.createTodo({
      todos: {
        title: newTitle.value,
        body: newBody.value,
        done: newDone.value
      }
    });
    window.state = this.state;
    window.newTitle = newTitle;
    window.newBody = newBody;
    window.newDone = newDone;
  }

  render() {
    return(
      <div>
        <form>
          <label htmlFor="title">Title: </label>
          <input id="title" name="title" type="text" />

          <label htmlFor="body">Description: </label>
          <textarea id="body" name="body"></textarea>

          <label htmlFor="done">Completed? </label>
          <input type="radio"
                  id="done"
                  name="done" value="true"
                  />Yes

                <input type="radio"
                  id="done"
                  name="done"
                  value="false"
                  />No

          <input type='submit' value="Create Todo"
            onClick={e => this.handleClick(e)} />
        </form>

      </div>
    );
  }
}

export default TodoListForm;
