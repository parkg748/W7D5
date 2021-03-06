import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const login = user => dispatch => (
  APIUtil.login(user).then(users => (dispatch(receiveCurrentUser(users))), error => (
    dispatch(receiveErrors(error.responseJSON))
  ))
);

export const signup = user => dispatch => (
  APIUtil.signup(user).then(users => (dispatch(receiveCurrentUser(users))), error => (
    dispatch(receiveErrors(error.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (dispatch(receiveCurrentUser(null))))
);
