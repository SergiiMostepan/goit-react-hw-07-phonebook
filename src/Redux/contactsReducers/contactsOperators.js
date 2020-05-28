import axios from 'axios';
import { contactSlice } from './contactsReducers';
import { loadingSlice } from '../loading/loadingReducer';
import { errorSlice } from '../error/errorReducer';

export const getItems = dispatch => {
  return dispatch => {
    dispatch(loadingSlice.actions.isLoading());
    dispatch(contactSlice.actions.getContactStarted());

    axios
      .get(`http://localhost:3001/contacts`)
      .then(res => {
        dispatch(contactSlice.actions.getContactsSuccess(res.data));
      })
      .catch(err => {
        dispatch(errorSlice.actions.getContactsError(err));
      })
      .finally(() => {
        dispatch(loadingSlice.actions.isLoading());
      });
  };
};

export const deleteContact = id => dispatch => {
  dispatch(loadingSlice.actions.isLoading());
  dispatch(contactSlice.actions.deleteContactStarted());

  axios
    .delete(`http://localhost:3001/contacts/${id}`)
    .then(() => {
      dispatch(contactSlice.actions.deleteContactsSuccess(id));
    })
    .catch(err => {
      dispatch(errorSlice.actions.deleteContactsError(err));
    })
    .finally(dispatch(loadingSlice.actions.isLoading()));
};

export const postContacts = contactToPost => dispatch => {
  dispatch(loadingSlice.actions.isLoading());
  dispatch(contactSlice.actions.postContactStarted());

  axios
    .post(`http://localhost:3001/contacts`, contactToPost)
    .then(res => {
      dispatch(contactSlice.actions.postContactsSuccess(res.data));
    })
    .catch(err => {
      dispatch(errorSlice.actions.postContactsError(err));
    })
    .finally(dispatch(loadingSlice.actions.isLoading()));
};
