import { createSlice } from "@reduxjs/toolkit";

import {
  fetchContacts,
  addContact,
  deleteContact,
} from "../../helpers/fetchContactsAPI";

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
