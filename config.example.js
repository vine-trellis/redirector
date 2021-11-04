const config = {};

// ENVIRONMENT VARIABLE CONFIG
config.ROOT_URL = process.env.ROOT_URL || "https://www.techintern.io/blog"
config.HTTP_PORT = process.env.HTTP_PORT || 80;
config.HTTPS_PORT = process.env.HTTPS_PORT || 443;
config.PRIVATE_KEY = process.env.PRIVATE_KEY || "./keys/priv.pem";
config.CERTIFICATE = process.env.CERTIFICATE || "./keys/cert.pem";

module.exports = config;