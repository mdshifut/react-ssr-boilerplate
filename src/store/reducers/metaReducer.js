import { SET_MESSAGE } from '../actions/actionTypes';

const init = {
  message: 'this is a message'
};

const metaReducer = (state = init, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload.message
      };

    default:
      return state;
  }
};

export default metaReducer;
