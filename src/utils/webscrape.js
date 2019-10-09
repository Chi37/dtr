const cheerio = require('cheerio');
const request = require('request');

request('https://en.wikipedia.org/wiki/sass', (err, res, html) => {
	if (!err && res.statusCode == 200) {
		let $ = cheerio.load(html);
		let childrenNodes = $('p').find('a').slice(0, 2)
		const nodes = []
		childrenNodes.each(function (i, elem) {
			nodes[i] = $(this).text();
		});
		console.log(nodes)
	}
})


