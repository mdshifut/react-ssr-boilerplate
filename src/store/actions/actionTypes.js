export const SET_MESSAGE = 'SET_MESSAGE';
import * as actionTypes from './actionTypes';

export const setMessage = message => ({
  type: actionTypes.SET_MESSAGE,
  payload: { message }
});
