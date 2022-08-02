// requiring these modules
const fs = require('fs');
const http = require('http');
const url = require('url');

// assigning html pages to consts
const homepage = fs.readFileSync('03_home.html');
const productpage = fs.readFileSync('03_market.html');
const otherpage = fs.readFileSync('03_other.html');

// parsing the JSON data to dataObj to be used w/ JS
const data = fs.readFileSync(`${__dirname}/03_json.json`, 'utf-8');
const dataObj = JSON.parse(data);

// creating server
const server = http.createServer((req, res) => {
    const pathName = req.url;

//Home page
if(pathName === "/" || pathName === "/home") {
    res.writeHead(200, {
        'Content-type' : 'text/html'
    });

    //
    res.end(homepage)

// market page
} else if (pathName === '/market') {
    res.writeHead(200, {
        'Content-type' : 'text/html'
    });

    //
    res.end(productpage)

// other page
} else if (pathName === '/other') {
    res.writeHead(200, {
        'Content-type' : 'text/html'
    });

    //
    res.end(otherpage)
    
} else {
    res.writeHead(404, {
        'Content-type': 'text/html',
        'my-own-header': 'hello'
    });


    res.end('<h1>Page not found!</h1>');
}

});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000')
});