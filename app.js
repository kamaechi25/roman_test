// Initialize app metrics dashboard
require('appmetrics-dash').attach()

const http = require('http');
const url = require('url');
const roman = require('./libs/roman-converter');

// Setting the host and port
const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((request, response) => {
  // Get the url path and query params
  const { pathname, query } = url.parse(request.url, true);

  // Check if the request method is GET and the pathname matches /romannumeral
  if (request.method === 'GET' && pathname === '/romannumeral' ) {
    // Call the convert to roman library on the query data
    const result = roman.convertToRoman(query.query);

    // Return a response in json format and status code as 200
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({ result }));
  } else {
    // Return a status code as 400 Bad Request
    response.statusCode = 400;
    response.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`
    \nServer running at http://${hostname}:${port}/romannumeral?query=15
    \nApp Monitoring Dashbord running at http://${hostname}:${port}/appmetrics-dash
  `);
});

module.exports = server;
