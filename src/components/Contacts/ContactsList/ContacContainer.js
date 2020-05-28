import { connect } from 'react-redux';
// import { contactSlice } from '../../../Redux/contactsReducers/contactsReducers';
// import { OnDeleteContact } from '../../../Redux/contactsReducers/contactSelectors';
import { deleteContact } from '../../../Redux/contactsReducers/contactsOperators';
import ContactItem from './CotactItem';

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(deleteContact(id)),
});
// const mapDispatchToProps = dispatch => ({
//   deleteContact: id => dispatch(OnDeleteContact(contactSlice, id)),
// });

export default connect(null, mapDispatchToProps)(ContactItem);
