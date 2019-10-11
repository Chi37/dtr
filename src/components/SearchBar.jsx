import React from 'react';

const SearchBar = (props) => {
	return (
		<>
			<form className='wiki-search' onSubmit={props.handleSearch}>
				<input placeholder="search Wikipedia" type="text" autoComplete="off" onChange={props.handleChange} />
				<button id='searchBtn'>
					Search
				</button>
			</form>
		</>
	);
}

export default SearchBar;



