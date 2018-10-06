import {connect} from 'react-redux';
import SessionForm from './session_form';
import {signup} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    formType: 'signup'
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  processForm: (currentUser) => dispatch(signup(currentUser));
};
