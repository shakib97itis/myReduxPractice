const {createSlice} = require('@reduxjs/toolkit');
const {counterActions} = require('../counter/counterSlice');

const dynamicCounterSlice = createSlice({
  name: 'dynamicCounter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state, actions) => {
      state.count += actions.payload;
    },
    decrement: (state, actions) => {
      state.count -= actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(counterActions.increment, (state) => {
      state.count += 1;
    });
  },
});

module.exports = dynamicCounterSlice.reducer;
module.exports.dynamicCounterActions = dynamicCounterSlice.actions;
