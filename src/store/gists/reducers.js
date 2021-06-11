import {
  GISTS_FETCH_START,
  GISTS_FETCH_SUCCESS,
  GISTS_FETCH_ERROR,
} from './types';

const initialState = {
  gists: [],
  fetchPending: false,
  fetchSuccess: false,
  fetchError: false,
};

export const gists = (state = initialState, action) => {
  switch (action.type) {
    case GISTS_FETCH_START:
      return {
        ...state,
        fetchPending: true,
        fetchSuccess: false,
        fetchError: false,
      };
    case GISTS_FETCH_SUCCESS:
      return {
        ...state,
        fetchPending: false,
        fetchSuccess: true,
        gists: action.payload,
      };
    case GISTS_FETCH_ERROR:
      return {
        ...state,
        fetchPending: false,
        fetchError: true,
      };
    default:
      return state;
  }
};
