import React from 'react';
import SearchBar from "./SearchBar"
import NavBar from "./NavBar";
import Node from "./Node"

const Container = (props) => {
	return (
		<>
			{console.log(props)}
			<NavBar user={props.user} handleLogout={props.handleLogout} />
			<SearchBar
				id='searchBar'
				handleSearch={props.handleSearch}
				handleChange={props.handleChange}
				value={props.value} />
			{(props.nodes) ? props.nodes.map(node => (
				<div>{node}</div>)) : ''}
			{console.log(typeof (props.nodes))}
			<Node />
		</>

	);
}

export default Container;