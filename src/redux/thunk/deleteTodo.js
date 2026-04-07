import {deleted} from '../todos/actions';

const updateColor = (todoId) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });

    if (response.status === 200) {
      dispatch(deleted(todoId));
    } else {
      throw new Error('Failed to delete todo');
    }
  } catch (error) {
    console.error('Failed to add todo:', error);
  }
};

export default updateColor;
