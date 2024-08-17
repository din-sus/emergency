const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const customSign = (payload) => {
	return jwt.sign(payload, process.env.SECRET_KEY);
};

const customVerify = (token) => {
	return jwt.verify(token, process.env.SECRET_KEY);
};

module.exports = {
	customSign,
	customVerify,
};
