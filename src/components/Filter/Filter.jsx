import React from 'react';

import cls from './Filter.module.scss';

const Filter = ({options, filter, setFilter}) => {
  const setSort = ( event ) => {
    setFilter({...filter, sort: event.target.value || ''});
  };

  const setSearch = ( event ) => {
    setFilter({...filter, query: event.target.value || ''});
  };

  return (
    <div className={cls.filter}>
      <select
      value={filter.sort}
      onChange={setSort}
      >
        <option value="">All Genres</option>
        {options.map(option => 
          <option key={option} value={option}>
            {option}
          </option>
        )}
      </select>

      <input
        value={filter.query||''}
        onChange={setSearch}
        placeholder="Search by movie name..."
      />
    </div>
  );
};

export default Filter;