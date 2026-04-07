import {toggled} from '../todos/actions';

const updateStatus = (todoId, todoStatus) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        completed: !todoStatus,
      }),
    });

    const todo = await response.json();
    dispatch(toggled(todo.id));
  } catch (error) {
    console.error('Failed to add todo:', error);
  }
};

export default updateStatus;
