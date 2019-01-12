import { SIGN_IN, SIGN_OUT, CREATE_STREAM } from './types';
import stream from '../api/stream';

export const signIn = (userId, userName, userImg) => {
  return {
    type: SIGN_IN,
    payload: {
      userId,
      userName,
      userImg
    }
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = formValues => async dispatch => {
  const res = await stream.post('/streams', formValues);

  dispatch({ type: CREATE_STREAM, payload: res.data });
};
