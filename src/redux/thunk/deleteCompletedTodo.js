import {clearCompleted} from '../todos/actions';

const deleteCompletedTodo = () => async (dispatch, getState) => {
  const completedTodos = getState().todos.filter((todo) => todo.completed);

  if (completedTodos.length === 0) return;

  try {
    await Promise.all(
      completedTodos.map((todo) =>
        fetch(`http://localhost:9000/todos/${todo.id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
        }),
      ),
    );

    dispatch(clearCompleted());
  } catch (error) {
    console.error('Failed to complete all todos:', error);
  }
};

export default deleteCompletedTodo;
