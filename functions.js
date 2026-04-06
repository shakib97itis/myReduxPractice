const fetchTodos = async (dispatch, getState) => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=10',
  );
  const todos = await response.json();

  dispatch({
    type: 'todos/todoLoaded',
    payload: todos,
  });

  console.log('Fetched todos | length : ', getState().todo.length);
};

module.exports = {fetchTodos};
