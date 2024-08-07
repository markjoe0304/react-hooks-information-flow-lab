
import React from 'react';

function Filter({ onCategoryChange }) {
  const handleChange = (event) => {
    onCategoryChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="filter">Filter by category: </label>
      <select id="filter" onChange={handleChange}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
      </select>
    </div>
  );
}

export default Filter;
