# Mirror.XYZ Scraper
Uses the Arweave graph ql to collect all transactions matching a given query.

Built and configured to fetch all Mirror.XYZ publications.

See [`./'data exploration'/tables/`](https://github.com/nathanabram/Mirror.XYZ-Scraper/tree/master/data%20exploration/tables) for some views of the data snapshot.

To gather all Mirror.XYZ publications between two Arweave blocks and output to a JSON, run `node runPipeline <startBlock> <endBlock> '<desiredPath>.json'`.

In the process of gathering the data each article will be output to `./data` as a single JSON record before being pulled back into a single record at the end.
This `./data` file can be safely deleted once the data has been generated. 

Each record in the eventual array has the following structure: 

`{contributer:"0xBlahBlahBlah",
	publication: "My Blog,
	title: "Arweave is cool",
	body: "In this essay, ... ",
	timestamp: 1643322525,
	nft: {},
	transaction: "sdfeife343j29fa"
	}`
  
