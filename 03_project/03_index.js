// requiring these modules
const fs = require('fs');
const http = require('http');
const url = require('url');

// assigning html pages to consts
const homepage = fs.readFileSync('03_home.html', 'utf-8');
const productpage = fs.readFileSync('03_market.html', 'utf-8');
const otherpage = fs.readFileSync('03_other.html', 'utf-8');
const tempCard = fs.readFileSync('03_temp_card.html', 'utf-8');

// parsing the JSON data to dataObj to be used w/ JS
const data = fs.readFileSync(`${__dirname}/03_json.json`, 'utf-8');
const dataObj = JSON.parse(data);

// replace template function - takes in a template and a product
const replaceTemplate = (temp,product) => {
    // replaces whatever was the placeholder for the product from json file .product
    let output = temp.replace(/{%PROD%}/g, product.product);
    output = output.replace(/{%COST%}/g, product.cost);
    output = output.replace(/{%COND%}/g, product.condition);
    output = output.replace(/{%MANU%}/g, product.manufacturer);
    output = output.replace(/{%WORK%}/g, product.works);
    return output;
}

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

    // looping over an array , each element will return something -> 
    // that something will be put into a position but in the new card array
    // this will replace the placeholders

    const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
    const output = productpage.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.end(output)

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