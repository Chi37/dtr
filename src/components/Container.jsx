import React from 'react';
import SearchBar from "./SearchBar"
import Node from "./Node";
import './Container.scss'


const Container = (props) => (
  <div className='container'>
    <SearchBar
      id='searchBar'
      handleSearch={props.handleSearch}
      handleChange={props.handleChange}
      value={props.value} />
    {(props.nodes) ? props.nodes.map((node, idx) => (
      <>
        <button id='node' onClick={() => props.handleNodeClick(node.link)}>
          <div className='node-container'><Node key={idx} node={node} /></div>
        </button>
        {node.snippet}
      </>
    )) : 'LOADING...'
    }
  </div>
);


export default Container;