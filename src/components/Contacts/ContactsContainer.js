import { getContacts } from '../../Redux/contactsReducers/contactSelectors';
import { getFilterQuery } from '../../Redux/filterReducers/filterSelectors';
import { getItems } from '../../Redux/contactsReducers/contactsOperators';
import { connect } from 'react-redux';
import Contacts from './Contacts';

const mapStateToProps = state => ({
  contactState: getContacts(state),
  filterState: getFilterQuery(state),
});

const MDTP = dispatch => ({
  getItems: () => dispatch(getItems()),
});

export default connect(mapStateToProps, MDTP)(Contacts);
