import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const result = await axios.get(
      "https://611f63ca9771bf001785c8de.mockapi.io/contacts"
    );
    return result.data;
  }
);

export const addContact = createAsyncThunk(
  "contacts/setContact",
  async (contact) => {
    const result = await axios.post(
      "https://611f63ca9771bf001785c8de.mockapi.io/contacts",
      contact
    );
    return result.data;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => {
    await axios.delete(
      `https://611f63ca9771bf001785c8de.mockapi.io/contacts/${id}`
    );
    return id;
  }
);

const contactsSlice = createSlice({
  name: "contacts",
  // initialState: initialState(),
  initialState: {
    items: [],
    status: null,
    error: null,
  },

  // reducers: {
  //   setContact: (state, action) => [...state, action.payload],
  //   deleteContact: (state, action) =>
  //     state.filter((contact) => contact.id !== action.payload),
  // },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => {
      state.items = [...action.payload];
      state.status = null;
      state.error = null;
    },
    [fetchContacts.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchContacts.rejected]: (state, action) => {
      state.status = null;
      state.error = action.error.message;
      console.log(state.error);
    },
    [addContact.fulfilled]: (state, action) => {
      state.items = [...state.items, action.payload];
      state.status = null;
      state.error = null;
    },
    [addContact.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [addContact.rejected]: (state, action) => {
      state.status = null;
      state.error = "Error";
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export default contactsSlice.reducer;
