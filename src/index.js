const http = require("http")
const express = require("express")
const { expressMiddleware } = require("@apollo/server/express4")
const buildGraphqlServer = require('./graphql/index.js')

const app = express();
const httpServer = http.createServer(app);

let serverStart = async () => {
	let server = buildGraphqlServer(httpServer); // have to be exported
	await server.start();
	app.use(expressMiddleware(server));
};
serverStart();


app.use(express.json())

httpServer.listen(9000, () => {
	console.log(9000);
});
