const cheerio = require('cheerio');
const request = require('request');

request('https://en.wikipedia.org/wiki/Computer', (err, res, html) => {
	if (!err && res.statusCode == 200) {
		let $ = cheerio.load(html);
		console.log($('p').text());
	}

})


