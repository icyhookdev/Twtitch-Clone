import { SIGN_IN, SIGN_OUT } from './types';

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
