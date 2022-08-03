/* we can create our own modules and export something from them like for ex. a function, 
then import this function into another file and use it there.
right now we are only using the replaceTemplate function in index.js but if you were planning on 
using the function in different areas, you'd just want to import it instead of rewriting it */

// replace template function - takes in a template and a product
// get rid of the function name and replace it with module.exports
module.exports = (temp,product) => {
    // replaces whatever was the placeholder for the product from json file .product
    let output = temp.replace(/{%PROD%}/g, product.device);
    output = output.replace(/{%COST%}/g, product.cost);
    output = output.replace(/{%COND%}/g, product.condition);
    output = output.replace(/{%MANU%}/g, product.manufacturer);
    output = output.replace(/{%WORK%}/g, product.works);
    output = output.replace(/{%ID%}/g, product.id);
    return output;
}