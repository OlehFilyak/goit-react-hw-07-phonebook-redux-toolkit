import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
