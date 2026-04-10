const {createAsyncThunk, createSlice} = require('@reduxjs/toolkit');

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
};

const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5',
  );
  return response.json();
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = action.meta.requestStatus;
        state.error = null;
        state.posts = [];
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = action.meta.requestStatus;
        state.posts = action.payload;
        state.error = null;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

module.exports = postsSlice.reducer;
module.exports.fetchPosts = fetchPosts;
