import { gistFetchError, gistFetchStart, gistFetchSuccess } from './actions';

const GISTS_API_URL = 'https://jsonplaceholder.typicode.com/posts';
const getUserGistsUrl = (userId) =>
  `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

export const fetchGists = (userId) => (dispatch) => {
  const gistsUrl = userId ? getUserGistsUrl(userId) : GISTS_API_URL;

  dispatch(gistFetchStart());

  fetch(gistsUrl)
    .then((res) => res.json())
    .then((res) => dispatch(gistFetchSuccess(res)))
    .catch((err) => dispatch(gistFetchError(err)));
};
