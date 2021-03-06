const fs = require("fs");
const { https } = require("follow-redirects");
// need to use follow-redirects since areweave tx id requests return url of the data

const reqData = async function (id) {
	let fetched = {};
	const options = {
		hostname: "arweave.net",
		port: 443,
		path: `/${id}`,
		method: "GET",
		followAllRedirects: true,
		agent: false,
	}; // end options

	const req = https.request(options, async (res) => {
		console.log(`statusCode: ${res.statusCode}`);
		let body = "";
		res.on("data", (chunk) => {
			if (res.statusCode == 200) {
				body += chunk;
			}
		});
		res.on("end", () => {
			fs.writeFileSync(`data/${id}.json`, JSON.stringify(body));
			return body;
			// output this record to the data file.
		});
	}); // end request callback

	req.on("error", (error) => {
		console.log("Error found. Current ID is: ", options.path);
		console.error(error);
	});

	req.end();
};

module.exports = { reqData };
