import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    // addContact: (state, action) => [...state, action.payload],
    // deleteContact: (state, action) =>
    //   state.filter(contact => contact.id !== action.payload),
    getContactStarted: (state, action) => [...state],
    getContactsSuccess: (state, action) => action.payload,
    // getItemsFailure: (state, action) => [...state],
    deleteContactStarted: (state, action) => [...state],
    deleteContactsSuccess: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
    postContactStarted: (state, action) => [...state],
    postContactsSuccess: (state, action) => [...state, action.payload],
  },
});
