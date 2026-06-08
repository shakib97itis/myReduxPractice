import rootReducer from '../rootReducer';

const myLogger = (store) => (next) => (action) => {
  console.log('Middleware Dispatching', action);
  const currentState = store.getState();
  console.log('Middleware Current State', currentState);

  const upComingState = [action].reduce(rootReducer, currentState);
  console.log('Middleware Next State', upComingState);

  return next(action);
};

export default myLogger;
