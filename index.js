const {createStore} = require('redux');
const {applyMiddleware} = require('redux');
const {thunk} = require('redux-thunk');
const {fetchTodos} = require('./functions');

// initial state
const initialState = {
  todo: [],
};

// reducer
function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todoAdded':
      return {
        ...state,
        todo: [...state.todo, {title: action.payload}],
      };
    case 'todos/todoLoaded':
      return {
        ...state,
        todo: [...state.todo, ...action.payload],
      };
    default:
      return state;
  }
}

// store
const store = createStore(todoReducer, applyMiddleware(thunk));

// subscribe to state changes
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchTodos);
