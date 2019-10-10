import React from 'react';
import './Node.scss'

const Node = (props) => (
  <>
    <p>{(props.node.name) ? props.node.name : props.node} </p>
  </>
);
export default Node;

