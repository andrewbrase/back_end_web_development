// requiring these modules (1st)
const { DiffieHellmanGroup } = require('crypto');
const fs = require('fs');
const http = require('http');
const url = require('url');

// requiring third party modules (2nd)
// slugify can be used to create slugs - the last part of a url 
// - that identifies the resource that thewebsite is displaying
const slugify = require('slugify');
// https://www.npmjs.com/package/slugify

// importing our replaceTemplate module (3rd)
const replaceTemplate = require('./03_modules/replaceTemplate');

// assigning html pages to consts
const homepage = fs.readFileSync('03_home.html', 'utf-8');
const productpage = fs.readFileSync('03_market.html', 'utf-8');
const otherpage = fs.readFileSync('03_other.html', 'utf-8');
const tempCard = fs.readFileSync('03_temp_card.html', 'utf-8');

// parsing the JSON data to dataObj to be used w/ JS
const data = fs.readFileSync(`${__dirname}/03_json.json`, 'utf-8');
const dataObj = JSON.parse(data);

// looks in JSON file for device name
const slugs = dataObj.map(el => slugify(el.device, { lower: true }))
console.log(slugs)
// ---> [ 'router', 'firewall', 'switch' ]

// test of slugify
console.log(slugify('Tech Page', {lower: true}));
// ---> tech-page

// creating server
const server = http.createServer((req, res) => {
    const { query, pathname } = url.parse(req.url, true);

// home page
if(pathname === "/" || pathname === "/home") {
    res.writeHead(200, {
        'Content-type' : 'text/html'
    });
    res.end(homepage);

// market page
} else if (pathname === '/market') {
    res.writeHead(200, {
        'Content-type' : 'text/html'
    });

    // looping over an array , each element will return something -> 
    // that something will be put into a position but in the new card array
    // this will replace the placeholders

    const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
    console.log(cardsHtml);
    const output = productpage.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.end(output);

// other page
} else if (pathname === '/product') {
    res.writeHead(200, { 'Content-type': 'text/html'});
    const product = dataObj[query.id];
    const output = replaceTemplate(otherpage, product);
    res.end(output);
    
} else {
    res.writeHead(404, {
        'Content-type': 'text/html',
        'my-own-header': 'hello'
    });
    res.end('<h1>Page not found!</h1>');
}
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});