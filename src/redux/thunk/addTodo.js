import {added} from '../todos/actions';

const addTodo = (todoText) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:9000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        text: todoText,
        completed: false,
      }),
    });

    const todo = await response.json();
    dispatch(added(todo));
  } catch (error) {
    console.error('Failed to add todo:', error);
  }
};

export default addTodo;
