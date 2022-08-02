// create the replace template function
const replaceTemplate = (temp,product) => {
    // the . after the product is from the json file the name of the field
    let output = temp.replace(/{%PROD%}/g, product.productName);
    // after the arg that was passed into the function is defined then we can alter it, a let can be mutated after it's been created
    output = output.replace(/{%FROM%}/g,product.from);
    output = output.replace(/{%COST%}/g,product.price);
    output = output.replace(/{%ORGA%}/g,product.organic);
}

// we must replace the placeholders in the 03_html file with data from the json file

const fs = require('fs');
const http = require ('http');

const jsonData = fs.readFileSync('02_json.json','utf-8');
// in dataObj we have an array of all the objects that are in 02_json.json
//we need to loop through this array, and for each of them replace the placeholders
const dataObj = JSON.parse(jsonData);

// load the pages to memory right in the beginning when we start the application
// only load once when app is started
const home = fs.readFileSync('03_farm.html','utf-8');
const prod = fs.readFileSync('03_prod.html','utf-8');

const server = http.createServer((req,res) => {
    const pathName = req.url;

    // Home page
    if (pathName === '/' || pathName === '/home') {
        // need to set the content type to html before the html home page is loaded
        res.writeHead(200, {'Content-type':'text/html'});
        // in dataObj we have an array of all the objects that are in 02_json.json
        //we need to loop through this array, and for each of them replace the placeholders
        // map will accept a callback function, whatever is returned will be saved into an array
        // a function will be created to replace everything in the template for the data from json
        const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el))
        res.end(home);
    
    // Product page
    } else if (pathName === '/prod') {
        res.writeHead(200, {'Content-type':'text/html'});
        res.end(prod);

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