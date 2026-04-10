const store = require('./app/store');
const {counterActions} = require('./features/counter/counterSlice');
const {
  dynamicCounterActions,
} = require('./features/dynamicCounter/dynamicCounterSlice');
const {fetchPosts} = require('./features/posts/postsSlice');

// initial state
// console.log('initialState', store.getState());

// subscribe to state changes
// store.subscribe(() => {
//   console.log(store.getState());
// });

// counter
// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.decrement());

// dynamic counter
// store.dispatch(dynamicCounterActions.increment(5));
// store.dispatch(dynamicCounterActions.increment(5));
// store.dispatch(dynamicCounterActions.decrement(2));

// posts
store.dispatch(fetchPosts());
