import React from 'react';

const SearchBar = (props) => {
	return (
		<>
			<form onSubmit={props.handleSearch}>
				<label>Search: </label>
				<input placeholder="search Wikipedia" type="text" autoComplete="off" value={props.value} onChange={props.handleChange} />
				<button>Search</button>
			</form>
		</>
	);
}

export default SearchBar;



