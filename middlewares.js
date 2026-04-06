export const delayedMiddleware = (store) => (next) => (action) => {
  if (action.type === 'ADD_TODO') {
    console.log('Delayed action');
    setTimeout(() => {
      next(action);
    }, 3000);
  } else {
    next(action);
  }
};
