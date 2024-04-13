// pulling in the var from 3 other files
const blue = require('./blue')
const sadie = require('./sadie')
const janet = require('./janet')

const allCats = [blue, sadie, janet]

module.exports = allCats; // allows other files to import the allCats var