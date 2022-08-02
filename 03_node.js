// we must replace the placeholders in the 03_html file with data from the json file

const fs = require('fs');
const http = require ('http');

const jsonData = fs.readFileSync('02_json.json','utf-8');
const dataObj = JSON.parse(jsonData);

const server = http.createServer((req,res) => {
    const pathName = req.url;

    // Home page
    if (pathName === '/' || pathName === '/home') {
        res.end('welcome to the homepage');
    
    // Product page
    } else if (pathName === '/prod') {
        res.end('this is the product page!');

    // API page
    } else if (pathName === '/api') {
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(jsonData);

    // Not found
    } else {
        res.writeHead(404, {
        'Content-type': 'text/html',
        'my-own-header': 'hello'
        });
        res.end('<h1>Page not found!</h1>');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('listening to requests on port 8000');
})