// server.js
require('@babel/register')({
  presets: ['@babel/preset-react']
});

const express = require('express');
const React = require('react');
const cors = require("cors");
const ReactDOMServer = require('react-dom/server');
const YourReactComponent = require('./App');

const app = express();
const port = 3000;
app.use(cors());

app.get('/', (req, res) => {
  const componentString = ReactDOMServer.renderToString(React.createElement(YourReactComponent));
  res.send(componentString);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
