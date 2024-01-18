import React, { useState } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchTerm);
  };

  return (
    <form onSubmit={handleSearch}>
      <input type="text" value={searchTerm} onChange={handleInputChange} placeholder="Search Resources" />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;