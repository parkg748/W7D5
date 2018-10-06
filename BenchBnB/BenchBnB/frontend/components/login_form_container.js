import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    formType: 'login'
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  processForm: (currentUser) => dispatch(login(currentUser));
};
