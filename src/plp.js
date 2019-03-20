const Handlebars = require('handlebars/dist/handlebars.runtime');
import pageTemplate from './includes/plp.hbs';
import productGridTemplate from './components/product-grid/product-grid.hbs';
import productTileTemplate from './components/product-tile/product-tile.hbs';

Handlebars.registerPartial('productGrid', productGridTemplate);
Handlebars.registerPartial('productTile', productTileTemplate);

const data = {
    count: 23,
    products: [
        {name: "Pink Shirt"},
        {name: "Blue Shirt"},
        {name: "Red Shirt"}
    ]
};
document.querySelector('.main').innerHTML = pageTemplate(data);