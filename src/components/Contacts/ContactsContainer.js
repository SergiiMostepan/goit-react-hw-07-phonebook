import { memoizedGetContacts } from '../../Redux/contactsReducers/contactSelectors';
import { memoizedGetFilterQuery } from '../../Redux/filterReducers/filterSelectors';
import { getItems } from '../../Redux/contactsReducers/contactsOperators';
import { connect } from 'react-redux';
import Contacts from './Contacts';

const mapStateToProps = state => ({
  contactState: memoizedGetContacts(state),
  filterState: memoizedGetFilterQuery(state),
});

const MDTP = dispatch => ({
  getItems: () => dispatch(getItems()),
});

export default connect(mapStateToProps, MDTP)(Contacts);
