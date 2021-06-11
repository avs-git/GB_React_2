import {
  GISTS_FETCH_START,
  GISTS_FETCH_SUCCESS,
  GISTS_FETCH_ERROR,
} from './types';

export const gistFetchStart = () => ({ type: GISTS_FETCH_START });

export const gistFetchSuccess = (payload) => ({
  type: GISTS_FETCH_SUCCESS,
  payload,
});

export const gistFetchError = (error) => ({
  type: GISTS_FETCH_ERROR,
  payload: error,
});
