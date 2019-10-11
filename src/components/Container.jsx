import React from 'react';
import SearchBar from "./SearchBar"
import Node from "./Node";
import './Container.scss'


const Container = (props) => (
  <>
  <div className='container'>
    <div className='search'>
      <SearchBar
        id='searchBar'
        handleSearch={props.handleSearch}
        handleChange={props.handleChange}
        value={props.value} />
    </div>
    <div className='node'>
      {(props.nodes) ? props.nodes.map((node, idx) => (
        <>
          <button id='node' onClick={() => props.handleNodeClick(node.link)}>
            <Node key={idx} node={node} />
          </button>
          {node.snippet}
        </>
        )) : 'LOADING...'
      }
    </div>
  </div>
  </>
);


export default Container;