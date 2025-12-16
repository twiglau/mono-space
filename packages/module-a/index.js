const lodash = require('lodash');

const data = [1, 2, 3, 4, 5];
const doubledData = lodash.map(data, (num) => num * 2);

console.log('Doubled Data:', doubledData);

module.exports = {
    doubledData,
};