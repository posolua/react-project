import React from 'react';

const BtnClear = ({ handleBtn, value }) =>
  value !== '' ? (
    <button type="button" onClick={handleBtn}>
      Clear category filter
    </button>
  ) : null;

export default BtnClear;
