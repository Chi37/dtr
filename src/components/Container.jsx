import React from 'react';
import SearchBar from "./SearchBar"
import NavBar from "./NavBar";

const Container = (props) => {
	return (
		<>
			<NavBar user={props.user} handleLogout={props.handleLogout} />
			<SearchBar
				id='searchBar'
				handleSearch={props.handleSearch}
				handleChange={props.handleChange}
				value={props.value} />
		</>
	);
}

export default Container;