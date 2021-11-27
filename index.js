// Imports necessary modules to project
const http = require('http');
const fs = require('fs');

// Creates web server using built-in http module
const server = http.createServer((req, res) => {
    // Stores requested url in a variable
    const pathName = req.url;
    // Gets current time
    const currentTime = new Date(Date.now());
    // Creates log message
    const logMessage = `Request to ${pathName} url. Created on ${currentTime}\n`;

    // Appends the log message to the file using fs module
    fs.appendFile(`./log.txt`, logMessage, err => {
        if (err) return console.log(err);
    });

    // Configures response header
    res.writeHead(200, { 'Content-type': 'text/html' });
    
    // Routing for the urls
    // Home page
    if (pathName === '/' || pathName === '/home') {
        res.end(`<h1>Home Page</h1>`);
    // About Us page
    } else if (pathName === '/about-us') {
        res.end(`<h1>About Us Page</h1>`);
    // Products page
    } else if (pathName === '/products') {
        res.end(`<h1>Products Page</h1>`);
    // Not found
    } else {
        // Responses with 404 status code
        res.writeHead(404, { 'Content-type': 'text/html' });
        res.end(`<h1>Page not found!</h1>`);
    }
});

// Listens web server
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening port number 8000...');
});