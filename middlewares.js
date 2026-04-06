const delayActionMiddleware = (store) => (next) => (action) => {
  if (action.type === 'todos/todoAdded') {
    console.log('Delayed action');
    setTimeout(() => {
      next(action);
    }, 3000);
  } else {
    next(action);
  }
};

const fetchTodosMiddleware = (store) => (next) => async (action) => {
  if (action.type === 'todos/fetchTodos') {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos?_limit=10',
    );
    const todos = await response.json();
    console.log('Fetched todos | length : ', todos.length);

    next({
      type: 'todos/todoLoaded',
      payload: todos,
    });
  } else {
    next(action);
  }
};

export {delayActionMiddleware, fetchTodosMiddleware};
