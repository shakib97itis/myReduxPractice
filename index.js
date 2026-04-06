const {createStore} = require('redux');
const {applyMiddleware} = require('redux');
const {delayedMiddleware} = require('./middlewares');

const initialState = {
  todo: [],
};

// reducer
function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    default:
      return state;
  }
}

// store
const store = createStore(todoReducer, applyMiddleware(delayedMiddleware));

// subscribe to store
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatching actions
store.dispatch({
  type: 'ADD_TODO',
  payload: 'Learn Redux',
});

store.dispatch({
  type: 'ADD_TODO',
  payload: 'Hello Redux',
});
