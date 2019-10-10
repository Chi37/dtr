import React from 'react';
import SearchBar from "./SearchBar"
import NavBar from "./NavBar";
import Node from "./Node";
import './Container.scss'


const Container = (props) => (
  <div className='container'>
    <header className="header-footer">DTR
      <NavBar user={props.user} handleLogout={props.handleLogout} />
    </header>
    <SearchBar
      id='searchBar'
      handleSearch={props.handleSearch}
      handleChange={props.handleChange}
      value={props.value} />
    {(props.nodes) ? props.nodes.map((node, idx) => (
      <>
        <button id='node' onClick={() => props.handleNodeClick(node.link)}>
          <Node key={idx} node={node} />
        </button>
        {node.snippet}
      </>
    )) : 'LOADING...'
    }
    <footer className="header-footer">Made by Chi</footer>
  </div>
);


export default Container;