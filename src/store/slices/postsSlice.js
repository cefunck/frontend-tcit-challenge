import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPosts, createPost, deletePost } from '../../services/postsService'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const posts = await getPosts();
  return posts;
});

export const saveNewPost = createAsyncThunk('posts/saveNewPost', async (args) => {
  const createdPost = await createPost(args.newPostName, args.newPostDescription);
  return createdPost;
});

export const destroyPost = createAsyncThunk('posts/destroyPost', async (postId) => {
  const deletedPost = await deletePost(postId);
  return deletedPost;
})

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    allPosts: [],
    filteredPosts: [],
    keyword: '',
    status: 'idle',
    error: null
  },
  reducers: {
    filterPostsBy: (state, action) => {
      let newFilteredPosts = state.allPosts
      let keyword = action.payload
      if (keyword != '') {
        newFilteredPosts = state.allPosts.filter((post) => {
          return post.name.includes(keyword) || post.description.includes(keyword)
        })
      }
      state.filteredPosts = newFilteredPosts
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allPosts = action.payload;
        state.filteredPosts = state.allPosts;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(saveNewPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(saveNewPost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const savedPost = action.payload

        if(savedPost){
          state.allPosts.push(action.payload);
          state.filteredPosts = state.allPosts;
        }
      })
      .addCase(saveNewPost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(destroyPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(destroyPost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const destroyedPost = action.payload

        if(destroyedPost) {
          state.allPosts = state.allPosts.filter((post) => {
            return post.id != destroyedPost.id
          });
          state.filteredPosts = state.allPosts;
        }
      })
      .addCase(destroyPost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { filterPostsBy } = postsSlice.actions;

export default postsSlice.reducer;
