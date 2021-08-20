import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://611f63ca9771bf001785c8de.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const result = await axios.get(BASE_URL);
    return result.data;
  }
);

export const addContact = createAsyncThunk(
  "contacts/setContact",
  async (contact) => {
    const result = await axios.post(BASE_URL, contact);
    return result.data;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
    return id;
  }
);
