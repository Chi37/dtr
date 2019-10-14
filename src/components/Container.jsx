import React from 'react';
import SearchBar from "./SearchBar"
import Node from "./Node";
import './Container.scss'



const Container = (props) => (
  <>
    <div className='search'>
      <SearchBar
        id='searchBar'
        handleSearch={props.handleSearch}
        handleChange={props.handleChange}
        value={props.value} />
    </div>
    <div className='node-container'>
      {(props.nodes) ? props.nodes.map((node, idx) => (
        <>
          <div className='node-wrap'>
            <button id='node' className='tooltip' aria-label={node.snippet} onClick={() => props.handleNodeClick(node.link)}>
              <Node key={idx} node={node} />
            </button>
          </div>
        </>
      )) : 'LOADING...'
      }
    </div>
  </>
);


export default Container;