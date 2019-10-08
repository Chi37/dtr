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






		// return fetch(BASE_URL + input, { mode: 'cors' })
		// .then(res => res.json())
		// .then( console.log(res['query']['search'][0]['title']))
