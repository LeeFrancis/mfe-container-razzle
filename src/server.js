import App from "./App";
import React from "react";
import { StaticRouter } from "react-router-dom";
import express from "express";
import { renderToString } from "react-dom/server";
import serialize from "serialize-javascript"; // Safer stringify, prevents XSS attacks

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
// Grab all the env config objects we are interested in for MFE's
const mfeConfig = Object.entries(process.env || {})
  .filter(entry => entry[0].startsWith("RAZZLE_MFE_"))
  .reduce(function(obj, entry) {
    return { ...obj, [entry[0]]: entry[1] };
  }, {});

const server = express();
server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get("/*", (req, res) => {
    const context = {};
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />        
        <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />        
        ${
          assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ""
        }
        ${
          process.env.NODE_ENV === "production"
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
        <script src="https://dmx-microfrontend.s3.amazonaws.com/react.development.js"></script>
        <script src="https://dmx-microfrontend.s3.amazonaws.com/react-dom.development.js"></script>
        <script src="https://dmx-microfrontend.s3.amazonaws.com/react-router-dom.js"></script>
    
    </head>
    <body>
        <div id="root">${markup}</div>
        <script>window.env = ${serialize(mfeConfig)};</script>
    </body>
</html>`
      );
    }
  });

export default server;
