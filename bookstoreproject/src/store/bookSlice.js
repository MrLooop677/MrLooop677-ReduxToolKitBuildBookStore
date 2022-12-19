import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addList } from "./addListSlice";
export const fetchData = createAsyncThunk(
  "books/fetchData",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const res = await fetch("http://localhost:3009/data");
      const data = await res.json();
      console.log("data", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const insertBook = createAsyncThunk(
  "books/insertBook",
  async (dataBook, thunkApi) => {
    const { rejectWithValue,getState,dispatch } = thunkApi;
    dataBook.userName=getState().auth.userName;
    try {
      const res = await fetch("http://localhost:3009/data", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        //make sure to serialize your JSON body
        body: JSON.stringify(dataBook),
      });

      //can make another dispatch action in this thunk
      dispatch(addList({name:"eslam",id:9,age:24}))
      // dispatch(deleteBook(3))
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch(`http://localhost:3009/data/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const sliceBook = createSlice({
  name: "books",
  initialState: { books: [], isLoding: false, err: null },
  reducers: {},
  // getData
  extraReducers: {
    [fetchData.pending]: (state, action) => {
      state.isLoding = true;
      console.log(action);
    },
    [fetchData.fulfilled]: (state, action) => {
      state.isLoding = false;
      state.books = action.payload;
      console.log("action.payload", action.payload);
    },
    [fetchData.rejected]: (state, action) => {
      state.isLoding = false;
      state.err = action.payload;
      console.log(action);
    },

    // post request Data
    [insertBook.pending]: (state, action) => {
      state.isLoding = true;
    },
    [insertBook.fulfilled]: (state, action) => {
      state.isLoding = false;
      state.books.push(action.payload);
    },
    [insertBook.rejected]: (state, action) => {
      state.isLoding = false;
      state.err = action.payload;
    },


        // delete request Data
        [deleteBook.pending]: (state, action) => {
          state.isLoding = true;
        },
        [deleteBook.fulfilled]: (state, action) => {
          state.isLoding = false;
          state.books=state.books.filter((book)=>book.id !==action.payload)
        },
        [deleteBook.rejected]: (state, action) => {
          state.isLoding = false;
          state.err = action.payload;
        },
  },
});

export default sliceBook.reducer;
