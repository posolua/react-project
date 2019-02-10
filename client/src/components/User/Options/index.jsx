import React from 'react';
import { withRouter } from 'react-router-dom';
import BtnClear from './BtnClear/BtnClearContainer';

const Options = ({
  categories,
  handleOptionChange,
  value,
  location,
  history,
}) => (
  <div>
    <label htmlFor="categories">Categories: </label>
    <select
      name="categories"
      value={value}
      onChange={({ target }) => {
        history.push({
          pathname: location.pathname,
          search: `category=${target.value}`,
        });

        handleOptionChange(target.value);
      }}
    >
      <option value="">All</option>
      {categories.map(option => (
        <option key={option.name} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
    <BtnClear />
  </div>
);

export default withRouter(Options);
