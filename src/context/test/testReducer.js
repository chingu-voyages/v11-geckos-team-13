import TEST from '../types';

export default (state, action) => {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        test: action.payload
      };
    default:
      return state;
  }
};
