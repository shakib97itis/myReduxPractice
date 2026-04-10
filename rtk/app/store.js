const {configureStore} = require('@reduxjs/toolkit');
const counterReducer = require('../features/counter/counterSlice');
const dynamicCounterReducers = require('../features/dynamicCounter/dynamicCounterSlice');
const postsReducer = require('../features/posts/postsSlice');
const {logger} = require('redux-logger');

const store = configureStore({
  reducer: {
    counter: counterReducer,
    dynamicCounter: dynamicCounterReducers,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
