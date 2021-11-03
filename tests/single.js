const { createSingleton } = require('../lib/index');


const vvv = { a: 1 };

const bbb = { b: 1 };

const s = createSingleton('x', vvv);
const d = createSingleton('x', bbb);


console.log(s, d, s === d);