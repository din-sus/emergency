const dotenv = require("dotenv");

const { Pool } = require("pg");

dotenv.config();

const pool = new Pool({
	host: process.env.DB_HOST,
	database: process.env.DB,
	port: process.env.DB_PORT,
	password: process.env.DB_PASSWORD,
	user: process.env.DB_USER,
});

export const fetchData = async (query, ...params) => {
	let client = await pool.connect();
	try {
		let { rows } = await client.query(query, params.length ? params : null);
		return rows;
	} catch (error) {
		console.error("Error executing query", error);
		throw error;
	} finally {
		client.release();
	}
};

module.exports = fetchData;
