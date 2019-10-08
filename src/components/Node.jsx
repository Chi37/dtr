import React from 'react';
import './Node.scss'

const Node = (props) => (
	<>
		<div className='circle'>
			<p>{props.node} </p>
		</div>
	</>
);
export default Node;