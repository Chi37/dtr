// require module for webscraping
const cheerio = require('cheerio');
const request = require('request');

// Wiki endpoint
let url = "https://en.wikipedia.org/w/api.php";


export function fetchWiki(input) {
  const params = {
    action: "opensearch",
    search: input.replace(/\s/g, "%20"),
    limit: "1",
    namespace: "0",
    format: "json"
  };
  url = url + "?origin=*";
  Object.keys(params).forEach(function (key) { url += "&" + key + "=" + params[key]; });
  return fetch(url, { mode: 'cors' })
    .then(console.log(url + ' url'))  
    .then(function (response) { return response.json(); })
    .catch(function (error) { console.log(error); });
}



export function scrapeWikiPage(link) {
  return new Promise((resolve, reject) => {
    request(link, function (err, res, html) {
      console.log(link);
      if (!err && res.statusCode === 200) {
        const nodes = []
        let $ = cheerio.load(html);
        let childrenNodes = $('div.mw-parser-output').find('p').find('a')
          .map((i, x) => $(x).attr('title')).toArray().slice(0, 2)
        console.log(childrenNodes)
        childrenNodes.map(function (elem, i) {
          nodes[i] = elem
        });
        resolve(nodes)
      } else {
        reject(err)
      }
    });
  });
}
