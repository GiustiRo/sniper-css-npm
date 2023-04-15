const fs = require('fs');
const SniperCSS = fs.readFileSync('./dist/sniper-css.min.css', 'utf8');

module.exports = SniperCSS;