const Handlebars = require('handlebars/dist/handlebars.runtime');
import headerTemplate from './includes/header.hbs';
import footerTemplate from './includes/footer.hbs';
import productGridTemplate from './components/product-grid/product-grid.hbs';

Handlebars.registerPartial('productGrid', productGridTemplate);

const header = document.querySelector('header');
header.innerHTML = headerTemplate();
const footer = document.querySelector('footer');
footer.innerHTML = footerTemplate();

console.log('scripts.js');