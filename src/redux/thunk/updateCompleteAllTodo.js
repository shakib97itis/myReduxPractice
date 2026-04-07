import {allCompleted} from '../todos/actions';

const updateCompleteAll = () => async (dispatch, getState) => {
  const todos = getState().todos;
  const incompleteTodos = todos.filter((todo) => !todo.completed);

  if (incompleteTodos.length === 0) return;

  try {
    await Promise.all(
      incompleteTodos.map(async (todo) => {
        const response = await fetch(`http://localhost:9000/todos/${todo.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify({
            completed: true,
          }),
        });

        if (!response.ok) {
          throw new Error(`Failed to update todo ${todo.id}`);
        }
      }),
    );

    dispatch(allCompleted());
  } catch (error) {
    console.error('Failed to complete all todos:', error);
  }
};

export default updateCompleteAll;
