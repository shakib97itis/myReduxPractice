const {fetchTodos} = require('./functions');

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

const fetchAsyncMiddlewareThunk = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  } else {
    return next(action);
  }
};

module.exports = {delayActionMiddleware, fetchAsyncMiddleware};
