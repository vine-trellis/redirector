#! /usr/bin/node

const express = require("express");
const https = require("https");
const fs = require("fs");
const config = require("./config.js");
const app = express();

const ROOT_URL = config.ROOT_URL;
const HTTP_PORT = config.HTTP_PORT;
const HTTPS_PORT = config.HTTPS_PORT;
const PRIVATE_KEY = config.PRIVATE_KEY;
const CERTIFICATE = config.CERTIFICATE;

app.use((req, res) => {
  const redirectURL = `${ROOT_URL}${req.originalUrl}`;
  console.log(`Redirecting ${req.ip} to ${redirectURL}`);
  res.redirect(301, redirectURL);
});

app.listen(HTTP_PORT, () => {
  console.log(`Redirector listening at http://localhost:${HTTP_PORT}`);
});

if (PRIVATE_KEY && CERTIFICATE) {
  let privateKey = fs.readFileSync(PRIVATE_KEY);
  let certificate = fs.readFileSync(CERTIFICATE);
  https
    .createServer(
      {
        key: privateKey,
        cert: certificate,
      },
      app
    )
    .listen(HTTPS_PORT, () => {
      console.log(`Redirector listening at https://localhost:${HTTPS_PORT}`);
    });
}
