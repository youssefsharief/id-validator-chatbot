const { nationalIdPattern } = require('./config')
const assert = require('assert');


console.log('783278783728732'.match(nationalIdPattern))
console.log('29206048800617'.match(nationalIdPattern))

// assert('783278783728732'.match(nationalIdPattern)) == null
// assert('29206048800617'.match(nationalIdPattern)) !== null
