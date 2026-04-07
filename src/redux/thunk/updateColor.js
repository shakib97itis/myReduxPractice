import {colorSelected} from '../todos/actions';

const updateColor = (todoId, todoColor) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        color: todoColor,
      }),
    });

    const todo = await response.json();
    dispatch(colorSelected(todo.id, todo.color));
  } catch (error) {
    console.error('Failed to add todo:', error);
  }
};

export default updateColor;
