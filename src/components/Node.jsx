import React from 'react';
import './Node.scss'

const Node = (props) => (
	<>
	{console.log(`node: ${props.node['name']}`)}
	{/* {props.node.map(e=>{
		console.log(e)
	})} */}
		<div>
			<p>{props.node.name}</p>
		</div>
	</>
);
export default Node;