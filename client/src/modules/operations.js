import axios from 'axios';
import * as actions from './actions';
import { getToken } from './selectors';

// for menu
export const fetchSuccessMenu = () => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const response = await axios.get('http://localhost:3001/menu');
    dispatch(actions.fetchSuccessMenu(response.data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

export const fetchSuccessCategories = () => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const response = await axios.get('http://localhost:3001/categories');
    dispatch(actions.fetchSuccessCategories(response.data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

// for session

export const fetchSignUp = credentials => dispatch => {
  dispatch(actions.signUpRequest());

  axios
    .post('http://localhost:4040/auth/signup', credentials)
    .then(response => dispatch(actions.signUpSuccess(response.data)))
    .catch(dispatch(actions.signUpError()));
};

export const fetchSignIn = credentials => dispatch => {
  dispatch(actions.signInRequest());

  axios
    .post('http://localhost:4040/auth/signin', credentials)
    .then(response => dispatch(actions.signInSuccess(response.data)))
    .catch(dispatch(actions.signInError()));
};

export const fetchSignOut = () => (dispatch, getState) => {
  dispatch(actions.signOutRequest());

  const token = getToken(getState());

  axios
    .post(
      'http://localhost:4040/auth/signout',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    .then(() => dispatch(actions.signOutSuccess()));
};

export const fetchCurrentUser = () => (dispatch, getState) => {
  dispatch(actions.refreshCurrentUserStart());

  const token = getToken(getState());

  axios
    .get('http://localhost:4040/auth/current', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => dispatch(actions.refreshCurrentUserSuccess(data.user)));
};
