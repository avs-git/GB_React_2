import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGists } from '@store/gists';

const getGists = ({ gists }) => gists;

const Gists = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const { gists, fetchPending, fetchSuccess, fetchError } =
    useSelector(getGists);

  useEffect(() => {
    dispatch(fetchGists(value));
  }, [value]);

  return (
    <div>
      <input
        value={value}
        onChange={({ target: { value } }) => {
          setValue(value);
        }}
      />
      {fetchPending && <h1>loading...</h1>}
      {fetchSuccess && (
        <ul>
          {gists.map(({ id, title }) => (
            <li key={id}>{title || 'no description'}</li>
          ))}
        </ul>
      )}
      {fetchError && <h1>Ooopps... fetch failed</h1>}
    </div>
  );
};

Gists.propTypes = {};

Gists.defaultProps = {};

export default Gists;
