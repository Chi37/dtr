DTR (Down the Rabbit hole) 

A web app that allows you to (almost) see the relationships between wiki pages. 
*note* this is not yet perfect, as webscraping can be a tricky and difficult task to extract the right data.

[LINK] (https://ga-dtr.herokuapp.com/)

[Trello] (https://trello.com/b/bDsqurUy/dtr)

TOOLS:
- MERN stack (Mongo, Express, React, NodeJS)
- MediaWiki API 
- Cheerio.js (Webscraping)
- SASS
- Vis.js (Not in production) 

HOWTO: 
- Search a word 
- A node should pop up
- hover over node and tooltip will show the snippet of the word if the API has data
- click on node to show up to two nodes related to that wiki page

TODO:
- []: more precise webscraping by finding the right divs, conditionals for moving onto another div if there aren't links available and filtering out unecessary fluff.
- []: Error handling when values are undefined. Warn user.
- []: Filter Wikipedia namespaces, so they don't show up when user query something similar.
- []: Finish implementing Vis.js for data representation.
- []: Clear Button.
- []: Better SASS implementation.
- []: refactor state for some components. (Node and search form possibly having their own state?)


