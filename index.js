const fs = require('fs');
const SniperCSS = fs.readFileSync('./scss/index.scss', 'utf8');
const flex = fs.readFileSync('./scss/flex.scss', 'utf8');
const text = fs.readFileSync('./scss/text.scss', 'utf8');
const variables = fs.readFileSync('./scss/_variables.scss', 'utf8');

module.exports = SniperCSS;
module.exports.SniperCss = SniperCSS;
module.exports.flex = flex;
module.exports.text = text;
module.exports.variables = variables;
