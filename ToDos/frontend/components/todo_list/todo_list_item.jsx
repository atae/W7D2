import React from 'react';

const todoListItem = (todos) => (todos.map((todo, index)  => (
   <li key={index}>{todo.title}</li>
 )));

 export default todoListItem;
