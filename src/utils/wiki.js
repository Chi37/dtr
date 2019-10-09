// require module for webscraping
const cheerio = require('cheerio');
const request = require('request');

// Wiki endpoint
let url = "https://en.wikipedia.org/w/api.php";


export function fetchWiki(input) {
	const params = {
		action: "opensearch",
		search: input,
		limit: "1",
		namespace: "0",
		format: "json"
	};
	url = url + "?origin=*";
	Object.keys(params).forEach(function (key) { url += "&" + key + "=" + params[key]; });
	return fetch(url, { mode: 'cors' })
		.then(function (response) { return response.json(); })
		.catch(function (error) { console.log(error); });
}



export function scrapeWikiPage(string) {
	return new Promise((resolve, reject) => {
		request(`https://en.wikipedia.org/wiki/${string}`, function (err, res, html) {
			if (!err && res.statusCode === 200) {
				const nodes = []
				let $ = cheerio.load(html);
				let childrenNodes = $('p').find('a').slice(0, 2)
				childrenNodes.each(function (i, elem) {
					nodes[i] = $(this).text();
				});
				resolve(nodes)} else {
				reject(err)
			}
		});
	});
}
