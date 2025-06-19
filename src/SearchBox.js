import React from 'react';

const SearchBox = ({onSearchChange}) => (
  <div className="pa2">
    <input className=""
     type="search"
     placeholder="Search for a robot" 
     onChange={onSearchChange}/>
  </div>
);
export default SearchBox;